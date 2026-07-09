export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Método não permitido' });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    response.status(500).json({ error: 'OPENAI_API_KEY não configurada' });
    return;
  }

  const { question = '', context = {}, history = [] } = request.body || {};
  const answers = Object.entries(context.answers || {})
    .filter(([, value]) => String(value || '').trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const prompt = `Canvas ativo: ${context.canvas || 'Canvas'}
Fase: ${context.phase || ''}
Empresa: ${context.company || 'não informada'}
Campos preenchidos: ${(context.filled || []).join(', ') || 'nenhum'}
Campos pendentes: ${(context.missing || []).join(', ') || 'nenhum'}

Respostas atuais:
${answers || 'Ainda sem respostas.'}

Pergunta do usuário:
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
          content: 'Você é o Agente RMM, um orientador estratégico da metodologia Resolva Meu Marketing. Responda em português do Brasil, seja prático, faça perguntas de diagnóstico quando faltar contexto e ajude o usuário a preencher o canvas atual com clareza, decisão e foco em resultado. Não invente dados da empresa; quando necessário, peça uma informação objetiva.'
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
}
