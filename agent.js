module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Metodo nao permitido' });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: 'OPENAI_API_KEY nao configurada' });
    return;
  }

  const { question = '', context = {}, history = [] } = request.body || {};
  const answers = Object.entries(context.answers || {})
    .filter(([, value]) => String(value || '').trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const prompt = `Canvas ativo: ${context.canvas || 'Canvas'}
Fase: ${context.phase || ''}
Empresa: ${context.company || 'nao informada'}
Campos preenchidos: ${(context.filled || []).join(', ') || 'nenhum'}
Campos pendentes: ${(context.missing || []).join(', ') || 'nenhum'}

Respostas atuais:
${answers || 'Ainda sem respostas.'}

Pergunta do usuario:
${question}`;

  const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-5.6',
      reasoning: { effort: 'low' },
      input: [
        {
          role: 'developer',
          content: 'Voce e o Agente RMM, um orientador estrategico da metodologia Resolva Meu Marketing. Responda em portugues do Brasil, seja pratico, faca perguntas de diagnostico quando faltar contexto e ajude o usuario a preencher o canvas atual com clareza, decisao e foco em resultado. Nao invente dados da empresa; quando necessario, peca uma informacao objetiva.'
        },
        ...history.slice(-6).map((message) => ({
          role: message.role === 'agent' ? 'assistant' : 'user',
          content: message.content
        })),
        { role: 'user', content: prompt }
      ]
    })
  });

  const data = await openaiResponse.json();

  if (!openaiResponse.ok) {
    response.status(openaiResponse.status).json({ error: data.error?.message || 'Erro ao consultar o agente' });
    return;
  }

  const reply = data.output_text || data.output?.flatMap((item) => item.content || []).map((item) => item.text || '').join('\n').trim();
  response.status(200).json({ reply });
};
