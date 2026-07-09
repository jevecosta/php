const methodSteps = [
  'Diagnóstico Estratégico', 'ICP e Mercado', 'Estratégia e Posicionamento', 'Oferta',
  'Funil e Vendas', 'Plano e Recursos', 'Execução e Operação', 'PDCA'
];

const canvases = [
  { id: 'swot', number: '01', title: 'SWOT Canvas', phase: methodSteps[0], subtitle: 'Entenda o cenário para tomar decisões estratégicas.', fields: [
    ['Forças', 'O que fazemos muito bem? Quais diferenciais e recursos temos disponíveis?'],
    ['Fraquezas', 'O que precisamos melhorar? Onde perdemos desempenho ou oportunidades?'],
    ['Oportunidades', 'Quais tendências, necessidades ou mercados podemos aproveitar?'],
    ['Ameaças', 'Quais riscos externos, concorrentes ou mudanças podem nos afetar?'],
    ['Cruzamento FO', 'Como nossas forças podem aproveitar oportunidades?'],
    ['Cruzamento WO', 'Como superar fraquezas para aproveitar oportunidades?'],
    ['Cruzamento FT', 'Como nossas forças podem nos proteger das ameaças?'],
    ['Cruzamento WT', 'Como reduzir fraquezas e evitar ameaças?'],
    ['Insights e próximos passos', 'Quais decisões e ações prioritárias nascem desta análise?', true]
  ]},
  { id: 'produto', number: '04', title: 'Definição do Produto', phase: methodSteps[2], subtitle: 'Clareza para criar produtos que geram valor e resultados.', fields: [
    ['Público-alvo', 'Para quem estamos criando este produto?'], ['Problema ou dor', 'Qual problema principal este produto resolve?'],
    ['Proposta de valor', 'Qual valor único entregamos?'], ['Necessidades e benefícios', 'Quais necessidades atendemos e quais benefícios geramos?'],
    ['Solução ou produto', 'O que é o produto e como funciona na prática?'], ['Diferenciais competitivos', 'O que nos diferencia da concorrência?'],
    ['Mercado', 'Qual o tamanho do mercado e quais tendências importam?'], ['Posicionamento', 'Como queremos ser percebidos?'],
    ['Modelo de receita', 'Como vamos gerar receita?'], ['Canais de entrega', 'Por quais canais o produto chegará ao cliente?'],
    ['Recursos necessários', 'Quais recursos, ferramentas, tecnologias e pessoas serão necessários?'], ['Processos-chave', 'Quais processos sustentam o produto?'],
    ['Métricas de sucesso', 'Como vamos medir o sucesso do produto?'], ['Riscos e desafios', 'Quais riscos podem atrapalhar?'],
    ['Próximos passos', 'Quais ações imediatas tiram o produto do papel?', true]
  ]},
  { id: 'icp-b2c', number: '05A', title: 'ICP B2C', phase: methodSteps[1], subtitle: 'Defina o cliente ideal pessoa física com profundidade.', fields: [
    ['Perfil demográfico', 'Idade, gênero, localização, profissão, renda e escolaridade.'], ['Estilo de vida', 'Como é o dia a dia, interesses e hábitos?'],
    ['Objetivos e sonhos', 'O que ele quer conquistar?'], ['Dores e frustrações', 'Quais problemas ele enfrenta hoje?'],
    ['Necessidades e desejos', 'O que ele realmente precisa ou deseja?'], ['Comportamento de compra', 'Como pesquisa, decide e compra?'],
    ['Critérios de decisão', 'O que pesa na escolha?'], ['Objeções', 'O que pode impedir a compra?'],
    ['Gatilhos de compra', 'O que desperta interesse e leva à ação?'], ['Canais e conteúdos preferidos', 'Onde está e que conteúdo consome?'],
    ['Jornada do cliente', 'Quais etapas percorre até comprar?'], ['Valor percebido', 'Qual transformação espera ao comprar?'],
    ['Mensagem que conecta', 'Qual mensagem fala diretamente com ele?'], ['Relacionamento', 'Como queremos nos relacionar ao longo do tempo?'],
    ['Personalidade do cliente', 'Valores, medos, motivações, frases e marcas que admira.', true]
  ]},
  { id: 'icp-b2b', number: '05B', title: 'ICP B2B', phase: methodSteps[1], subtitle: 'Defina a empresa ideal e quem decide a compra.', fields: [
    ['Perfil da empresa', 'Segmento, faturamento, número de funcionários, região e maturidade.'], ['Tomador de decisão', 'Quem compra, influencia, aprova e utiliza?'],
    ['Momento da empresa', 'Em que momento normalmente busca nossa solução?'], ['Principais dores', 'Quais problemas essa empresa enfrenta?'],
    ['Objetivos', 'Quais resultados deseja alcançar?'], ['Objeções', 'O que pode impedir a contratação?'],
    ['Gatilhos de compra', 'O que faz a empresa procurar uma solução?'], ['Processo de decisão', 'Como toma decisões de compra?'],
    ['Critérios de escolha', 'O que mais pesa na decisão?'], ['Proposta de valor', 'Por que somos a melhor escolha para esse ICP?'],
    ['Mensagem central', 'Em uma frase, por que nossa solução é perfeita para esse ICP?'], ['Oferta ideal', 'Qual oferta entrega máximo valor para esse ICP?'],
    ['Outras observações', 'Informações adicionais importantes.', true]
  ]},
  { id: 'jornada', number: '06', title: 'Jornada do Cliente', phase: methodSteps[4], subtitle: 'Mapeie como o cliente descobre, considera, decide e vira promotor.', fields: [
    ['Descoberta', 'O que o cliente faz, pensa, sente, precisa e encontra no primeiro contato?'], ['Consideração', 'Como ele busca entender alternativas e quais dúvidas surgem?'],
    ['Decisão', 'O que faz escolher a melhor solução?'], ['Implementação', 'Como vive a entrega da solução escolhida?'],
    ['Sucesso', 'Como percebe valor e resultado?'], ['Promotor', 'Como recomenda e gera novas oportunidades?'],
    ['Insights principais', 'Quais aprendizados aparecem sobre a experiência?'], ['Oportunidades de melhoria', 'Onde podemos melhorar a jornada para gerar mais valor?', true]
  ]},
  { id: 'valor', number: '07', title: 'Proposta de Valor', phase: methodSteps[2], subtitle: 'Defina por que o cliente deve escolher nossa empresa.', fields: [
    ['ICP', 'Para quem entregamos valor?'], ['Trabalhos do cliente', 'O que o cliente precisa fazer ou alcançar?'],
    ['Dores do cliente', 'Quais problemas, desafios e frustrações existem?'], ['Ganhos do cliente', 'Quais resultados, benefícios e aspirações deseja alcançar?'],
    ['Produtos e serviços', 'Quais soluções oferecemos hoje?'], ['Alivia dores', 'Como ajudamos o cliente a superar dores e obstáculos?'],
    ['Gera ganhos', 'Como ajudamos o cliente a alcançar ganhos?'], ['Nossa promessa de valor', 'Em uma frase clara, qual é o valor único que entregamos?'],
    ['Por que somos diferentes?', 'O que nos diferencia da concorrência?'], ['Provas de valor', 'Quais evidências comprovam nosso valor?'],
    ['Mensagem central', 'Qual mensagem deve ficar na mente do cliente?'], ['Reason to Believe', 'Por que o cliente deve acreditar na promessa?'],
    ['Impacto no negócio', 'Qual impacto mensurável geramos?', true]
  ]},
  { id: 'oferta', number: '08', title: 'Oferta Canvas', phase: methodSteps[3], subtitle: 'Crie ofertas que geram valor e resultados.', fields: [
    ['ICP', 'Para quem essa oferta foi criada?'], ['Problema central', 'Qual problema principal a oferta resolve?'],
    ['Resultado principal', 'Qual transformação prometemos entregar?'], ['Descrição da oferta', 'O que exatamente entregamos?'],
    ['Componentes da oferta', 'Quais produtos, serviços, entregáveis e experiências estão inclusos?'], ['Diferenciais competitivos', 'O que diferencia esta oferta?'],
    ['Estrutura da oferta', 'Modelo de entrega, formato, duração e investimento.'], ['Provas e garantias', 'Quais provas, cases e garantias reduzem risco?'],
    ['Preço e condições', 'Faixa de investimento, modelo de cobrança e condições.'], ['Mensagem da oferta', 'Título, promessa e chamada para ação.', true]
  ]},
  { id: 'funil', number: '09', title: 'Funil Canvas', phase: methodSteps[4], subtitle: 'Desenhe o caminho que transforma desconhecidos em clientes e promotores.', fields: [
    ['Atrair', 'Objetivo, público, ações, canais, conteúdos e métricas da etapa.'], ['Converter', 'Como transformar visitantes em oportunidades?'],
    ['Relacionar', 'Como nutrir e qualificar o relacionamento?'], ['Vender', 'Como converter oportunidades em clientes?'], ['Encantar', 'Como gerar sucesso, fidelização e indicações?'],
    ['Gatilhos de entrada', 'O que faz o cliente iniciar sua jornada conosco?'], ['Objeções por etapa', 'Quais objeções precisam ser superadas?'],
    ['Recursos críticos', 'Quais recursos e processos sustentam o funil?'], ['Regras do funil', 'Quais padrões precisam ser respeitados?', true]
  ]},
  { id: 'plano-marketing', number: '10', title: 'Plano de Marketing', phase: methodSteps[5], subtitle: 'Estratégia, ações e recursos para gerar resultados.', fields: [
    ['ICP', 'Para quem vamos comunicar e criar valor?'], ['Objetivos de marketing', 'Quais resultados queremos alcançar?'],
    ['Posicionamento e mensagem', 'Como vamos comunicar nossa posição?'], ['Pilares e temas', 'Quais temas serão abordados?'],
    ['Estratégias principais', 'Quais estratégias vamos usar?'], ['Plano de ações', 'Ações, objetivos, público, canal, formato, responsáveis, datas e investimento.'],
    ['Recursos e equipe', 'Pessoas, ferramentas, parceiros e orçamento.'], ['Cronograma geral', 'Principais marcos e entregas.'],
    ['KPIs e metas', 'Como vamos medir o sucesso?'], ['Riscos e dependências', 'O que pode impactar o plano?', true]
  ]},
  { id: 'acao-5w2h', number: '02', title: 'Plano de Ação 5W2H', phase: methodSteps[6], subtitle: 'Transforme estratégia em tarefas práticas e mensuráveis.', fields: [
    ['What', 'O que será feito?'], ['Why', 'Por que será feito?'], ['Where', 'Onde será feito?'], ['When', 'Quando começa e termina?'],
    ['Who', 'Quem será responsável?'], ['How', 'Como será feito?'], ['How much', 'Quanto vai custar ou quais recursos exige?'], ['Status', 'Não iniciado, em andamento ou concluído?'],
    ['Prioridades', 'Quais ações são prioritárias e por quê?'], ['Resultados esperados', 'Quais resultados esperamos alcançar?'], ['Métricas de sucesso', 'Como vamos medir o sucesso?', true]
  ]},
  { id: 'dashboard', number: '11', title: 'Dashboard Canvas', phase: methodSteps[7], subtitle: 'Mensurar o que importa para gerar crescimento.', fields: [
    ['Objetivo do dashboard', 'Qual objetivo principal deste painel?'], ['Tomadores de decisão', 'Quem usará o dashboard para tomar decisões?'],
    ['Frequência de análise', 'Diário, semanal, quinzenal, mensal ou outro?'], ['Funil de referência', 'Qual parte do funil será acompanhada?'],
    ['Fontes de dados', 'Quais ferramentas alimentarão o dashboard?'], ['Indicadores principais', 'Etapa, objetivo, KPI, fórmula, fonte, meta, frequência e responsável.'],
    ['Metas gerais', 'Quais metas o dashboard deve apoiar?'], ['Insights esperados', 'Quais perguntas queremos responder?'], ['Alertas e sinais', 'Quais variações exigem atenção?'],
    ['Revisão e melhoria', 'Como vamos revisar e evoluir o dashboard?', true]
  ]},
  { id: 'pdca', number: '03', title: 'PDCA Canvas', phase: methodSteps[7], subtitle: 'Planeje, execute, meça, aprenda e evolua continuamente.', fields: [
    ['Plan', 'Objetivos, ações planejadas e indicadores de sucesso.'], ['Do', 'Ações executadas, recursos utilizados e registros importantes.'],
    ['Check', 'Resultados alcançados, análise de desempenho, desvios e causas.'], ['Act', 'Ações de melhoria, padronização e próximos passos.'],
    ['Ciclo contínuo', 'Data do próximo ciclo e responsável pelo acompanhamento.', true]
  ]}
];

const storageKey = 'rmm-canvas-app-v1';
let state = loadState();
let activeId = state.activeId || canvases[0].id;
if (!state.chat) state.chat = {};
if (!state.agentConfig) state.agentConfig = {};
if (state.agentOpen === undefined) state.agentOpen = true;
const $ = (selector) => document.querySelector(selector);
const elements = { shell: $('.app-shell'), nav: $('#canvasNav'), title: $('#canvasTitle'), subtitle: $('#canvasSubtitle'), phase: $('#phaseLabel'), progress: $('#progressLabel'), progressBar: $('#progressBar'), methodStrip: $('#methodStrip'), fieldGrid: $('#fieldGrid'), stepCount: $('#stepCount'), summaryList: $('#summaryList'), summaryCount: $('#summaryCount'), company: $('#companyInput'), owner: $('#ownerInput'), date: $('#dateInput'), exportButton: $('#exportButton'), printButton: $('#printButton'), clearButton: $('#clearButton'), agentToggle: $('#agentToggle'), agentClose: $('#agentClose'), agentStatus: $('#agentStatus'), agentContext: $('#agentContext'), agentSuggestions: $('#agentSuggestions'), chatLog: $('#chatLog'), chatForm: $('#chatForm'), chatInput: $('#chatInput') };

function loadState() { try { return JSON.parse(localStorage.getItem(storageKey)) || { answers: {}, meta: {} }; } catch { return { answers: {}, meta: {} }; } }
function saveState() { state.activeId = activeId; localStorage.setItem(storageKey, JSON.stringify(state)); }
function getActiveCanvas() { return canvases.find((canvas) => canvas.id === activeId) || canvases[0]; }
function getCanvasAnswers(canvas) { if (!state.answers) state.answers = {}; if (!state.answers[canvas.id]) state.answers[canvas.id] = {}; return state.answers[canvas.id]; }
function getChatMessages(canvas) { if (!state.chat) state.chat = {}; if (!state.chat[canvas.id]) state.chat[canvas.id] = []; return state.chat[canvas.id]; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
function calculateProgress(canvas) { const answers = getCanvasAnswers(canvas); const filled = canvas.fields.filter((field) => (answers[field[0]] || '').trim()).length; return Math.round((filled / canvas.fields.length) * 100); }

function renderNav() {
  elements.nav.innerHTML = canvases.map((canvas) => {
    const active = canvas.id === activeId ? ' active' : '';
    return `<button class="nav-button${active}" type="button" data-canvas-id="${canvas.id}"><span class="nav-index">${canvas.number}</span><span><span class="nav-title">${canvas.title}</span><span class="nav-phase">${canvas.phase}</span></span><span class="nav-percent">${calculateProgress(canvas)}%</span></button>`;
  }).join('');
  elements.nav.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => { activeId = button.dataset.canvasId; saveState(); render(); }));
}

function renderMethodStrip(canvas) {
  elements.methodStrip.innerHTML = methodSteps.map((step, index) => `<div class="method-step${step === canvas.phase ? ' active' : ''}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${step}</strong></div>`).join('');
}

function renderFields(canvas) {
  const answers = getCanvasAnswers(canvas);
  elements.fieldGrid.innerHTML = canvas.fields.map((field, index) => {
    const [title, help, wide] = field;
    return `<article class="field-card${wide ? ' wide' : ''}"><div class="field-head"><span class="field-number">${String(index + 1).padStart(2, '0')}</span><div><h2 class="field-title">${title}</h2><p class="field-help">${help}</p></div></div><textarea data-field="${escapeHtml(title)}" placeholder="Digite aqui suas respostas, hipóteses e decisões.">${escapeHtml(answers[title] || '')}</textarea></article>`;
  }).join('');
  elements.fieldGrid.querySelectorAll('textarea').forEach((textarea) => textarea.addEventListener('input', () => { const answers = getCanvasAnswers(canvas); answers[textarea.dataset.field] = textarea.value; saveState(); updateProgressAndSummary(canvas); renderNav(); }));
}

function updateProgressAndSummary(canvas) {
  const progress = calculateProgress(canvas);
  elements.progress.textContent = `${progress}% preenchido`;
  elements.progressBar.style.width = `${progress}%`;
  const answers = getCanvasAnswers(canvas);
  const filledItems = canvas.fields.map(([title]) => [title, answers[title] || '']).filter(([, value]) => value.trim());
  elements.summaryCount.textContent = `${filledItems.length} itens`;
  elements.summaryList.innerHTML = filledItems.length ? filledItems.map(([title, value]) => `<div class="summary-item"><strong>${escapeHtml(title)}</strong><p>${escapeHtml(value)}</p></div>`).join('') : '<p class="summary-empty">À medida que você preencher os campos, a síntese deste canvas aparecerá aqui.</p>';
}


function getCanvasContext(canvas) {
  const answers = getCanvasAnswers(canvas);
  const filled = canvas.fields.filter(([title]) => (answers[title] || '').trim()).map(([title]) => title);
  const missing = canvas.fields.filter(([title]) => !(answers[title] || '').trim()).map(([title]) => title);
  return { canvas: canvas.title, phase: canvas.phase, subtitle: canvas.subtitle, company: state.meta.company || '', filled, missing, answers };
}

function buildLocalAgentReply(question, canvas) {
  const context = getCanvasContext(canvas);
  const firstMissing = context.missing[0];
  const nextField = firstMissing ? canvas.fields.find(([title]) => title === firstMissing) : null;
  const nextHelp = nextField ? nextField[1] : '';
  const filledText = context.filled.length ? `Você já avançou em: ${context.filled.slice(0, 4).join(', ')}.` : 'Ainda não há respostas preenchidas neste canvas.';
  const nextText = firstMissing ? `Próximo foco: ${firstMissing}. ${nextHelp}` : 'Este canvas está completo. Agora revise coerência, clareza e prioridade das decisões.';
  const questionText = question.trim() ? `Sobre sua pergunta: "${question.trim()}"` : 'Para começar com direção:';
  return `${questionText}\n\n${filledText}\n\n${nextText}\n\nSugestão prática: responda em frases curtas, com decisões verificáveis. Evite termos genéricos como "melhorar marketing"; prefira algo observável, como canal, público, métrica, prazo ou evidência.`;
}

function renderAgent(canvas) {
  elements.shell.classList.toggle('agent-open', Boolean(state.agentOpen));
  const isFileMode = window.location.protocol === 'file:';
  elements.agentStatus.className = 'agent-status ' + (isFileMode ? 'local' : 'api');
  const agentName = (state.agentConfig && state.agentConfig.name) ? state.agentConfig.name : 'Agente RMM';
  elements.agentStatus.innerHTML = isFileMode
    ? '<strong>Modo local</strong>Abra pelo domínio da Vercel para conectar ao ChatGPT.'
    : '<strong>Modo API</strong>' + escapeHtml(agentName) + ' tentará consultar ' + escapeHtml((state.agentConfig && state.agentConfig.endpoint) || '/api/agent') + '.';
  const context = getCanvasContext(canvas);
  elements.agentContext.innerHTML = `<strong>${escapeHtml(canvas.title)}</strong><p>${escapeHtml(context.filled.length)} de ${canvas.fields.length} blocos preenchidos. Fase: ${escapeHtml(canvas.phase)}.</p>`;
  const suggestions = [
    'Por onde devo começar neste canvas?',
    'Analise minhas respostas e aponte lacunas.',
    'Transforme minhas respostas em próximos passos.'
  ];
  elements.agentSuggestions.innerHTML = '<strong>Perguntas rápidas</strong>' + suggestions.map((text) => `<button class="suggestion-button" type="button">${escapeHtml(text)}</button>`).join('');
  elements.agentSuggestions.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => sendAgentMessage(button.textContent || '')));
  const messages = getChatMessages(canvas);
  elements.chatLog.innerHTML = messages.length ? messages.map((message) => `<div class="chat-message ${message.role}"><small>${message.role === 'user' ? 'Você' : 'Agente RMM'}</small>${escapeHtml(message.content)}</div>`).join('') : `<div class="chat-message agent"><small>Agente RMM</small>Estou olhando para o ${escapeHtml(canvas.title)}. Posso te orientar campo por campo, revisar suas respostas ou transformar o preenchimento em decisões práticas.</div>`;
  elements.chatLog.scrollTop = elements.chatLog.scrollHeight;
}

async function requestAgentReply(question, canvas) {
  if (window.location.protocol === 'file:') throw new Error('Abra pela Vercel para usar a API');
  const endpoint = (state.agentConfig.endpoint || '/api/agent').trim() || '/api/agent';
  const payload = { question, context: getCanvasContext(canvas), history: getChatMessages(canvas).slice(-8), agentConfig: state.agentConfig };
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error('API indisponível');
  const data = await response.json();
  return data.reply || buildLocalAgentReply(question, canvas);
}

async function sendAgentMessage(question) {
  const canvas = getActiveCanvas();
  const text = question.trim();
  if (!text) return;
  const messages = getChatMessages(canvas);
  messages.push({ role: 'user', content: text });
  elements.chatInput.value = '';
  elements.chatForm.querySelector('button').disabled = true;
  renderAgent(canvas);
  try {
    const reply = await requestAgentReply(text, canvas);
    messages.push({ role: 'agent', content: reply });
  } catch {
    messages.push({ role: 'agent', content: buildLocalAgentReply(text, canvas) + '\n\nObs.: estou em modo local. Ao publicar na Vercel e configurar a variável OPENAI_API_KEY, este painel passa a consultar o agente com ChatGPT.' });
  } finally {
    elements.chatForm.querySelector('button').disabled = false;
    saveState();
    renderAgent(canvas);
  }
}
function renderAgentConfig() {
  const config = state.agentConfig || {};
  elements.agentNameInput.value = config.name || '';
  elements.agentEndpointInput.value = config.endpoint || '/api/agent';
  elements.agentInstructionsInput.value = config.instructions || '';
  const hasCustomAgent = Boolean((config.name || '').trim() || (config.instructions || '').trim() || (config.endpoint || '').trim() !== '/api/agent');
  elements.agentConfigHint.textContent = hasCustomAgent
    ? 'Conexão salva neste navegador. O chat enviará estas instruções junto com o canvas.'
    : 'Use este espaço para conectar um agente GPT personalizado do cliente.';
}

function saveAgentConfig() {
  state.agentConfig = {
    name: elements.agentNameInput.value.trim(),
    endpoint: elements.agentEndpointInput.value.trim() || '/api/agent',
    instructions: elements.agentInstructionsInput.value.trim()
  };
  saveState();
  renderAgentConfig();
  renderAgent(getActiveCanvas());
}

function buildPdfHtml(canvas, mode) {
  const answers = getCanvasAnswers(canvas);
  const meta = state.meta || {};
  const isBlank = mode === 'blank';
  const titleSuffix = isBlank ? 'em branco' : 'preenchido';
  const fieldsHtml = canvas.fields.map((field, index) => {
    const title = field[0];
    const help = field[1];
    const answer = isBlank ? '' : (answers[title] || '');
    const answerHtml = answer.trim()
      ? `<div class="answer filled">${escapeHtml(answer).replace(/\n/g, '<br>')}</div>`
      : '<div class="answer blank"><span></span><span></span><span></span><span></span></div>';
    return `<article class="pdf-card">
      <div class="pdf-card-head"><b>${String(index + 1).padStart(2, '0')}</b><div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(help)}</p></div></div>
      ${answerHtml}
    </article>`;
  }).join('');

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>${escapeHtml(canvas.title)} - ${titleSuffix}</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; padding: 28px; color: #111; font-family: Arial, Helvetica, sans-serif; background: #fff; }
  .pdf-header { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: start; border-bottom: 3px solid #111; padding-bottom: 18px; margin-bottom: 20px; }
  .brand { border-left: 4px solid #111; padding-left: 14px; font-size: 24px; line-height: 1.05; }
  .brand strong, .brand span { display: block; }
  h1 { margin: 14px 0 6px; font-size: 42px; line-height: 1; text-transform: uppercase; }
  .subtitle { margin: 0; color: #555; font-size: 15px; }
  .meta { min-width: 260px; border: 1px solid #ddd; border-radius: 8px; padding: 12px; font-size: 12px; }
  .meta div { margin-bottom: 8px; }
  .meta b { text-transform: uppercase; }
  .mode { display: inline-block; margin-top: 8px; padding: 6px 8px; border-radius: 6px; background: #111; color: #fff; font-weight: 700; text-transform: uppercase; }
  .pdf-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .pdf-card { border: 1px solid #ddd; border-radius: 8px; padding: 14px; break-inside: avoid; min-height: 175px; }
  .pdf-card-head { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 10px; margin-bottom: 12px; }
  .pdf-card-head b { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 7px; background: #111; color: #fff; font-size: 13px; }
  h2 { margin: 0; font-size: 15px; text-transform: uppercase; }
  .pdf-card p { margin: 4px 0 0; color: #666; font-size: 12px; line-height: 1.35; }
  .answer { margin-top: 10px; font-size: 13px; line-height: 1.45; }
  .answer.filled { white-space: normal; }
  .answer.blank { display: grid; gap: 14px; padding-top: 8px; }
  .answer.blank span { border-bottom: 1px solid #d9d9d9; height: 14px; }
  @media print { body { padding: 18mm; } .pdf-card { min-height: 42mm; } }
  @page { size: A4; margin: 12mm; }
</style>
</head>
<body>
  <header class="pdf-header">
    <div>
      <div class="brand"><strong>Resolva</strong><span>Meu Marketing</span></div>
      <h1>${escapeHtml(canvas.title)}</h1>
      <p class="subtitle">${escapeHtml(canvas.subtitle)}</p>
      <span class="mode">Canvas ${titleSuffix}</span>
    </div>
    <div class="meta">
      <div><b>Empresa:</b> ${escapeHtml(meta.company || '')}</div>
      <div><b>Responsável:</b> ${escapeHtml(meta.owner || '')}</div>
      <div><b>Data:</b> ${escapeHtml(meta.date || '')}</div>
      <div><b>Fase:</b> ${escapeHtml(canvas.phase)}</div>
    </div>
  </header>
  <main class="pdf-grid">${fieldsHtml}</main>
</body>
</html>`;
}

function createCanvasPdf(mode) {
  const canvas = getActiveCanvas();
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.alert('Permita pop-ups para gerar o PDF deste canvas.');
    return;
  }
  printWindow.document.open();
  printWindow.document.write(buildPdfHtml(canvas, mode));
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 250);
}
function renderMeta() {
  elements.company.value = state.meta.company || '';
  elements.owner.value = state.meta.owner || '';
  elements.date.value = state.meta.date || new Date().toISOString().slice(0, 10);
  [['company', elements.company], ['owner', elements.owner], ['date', elements.date]].forEach(([key, input]) => input.addEventListener('input', () => { state.meta[key] = input.value; saveState(); }));
}

function exportAnswers() {
  const payload = { exportedAt: new Date().toISOString(), meta: state.meta, canvases: canvases.map((canvas) => ({ number: canvas.number, title: canvas.title, phase: canvas.phase, answers: getCanvasAnswers(canvas) })) };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const company = (state.meta.company || 'empresa').toLowerCase().replace(/[^a-z0-9]+/gi, '-');
  link.href = url;
  link.download = `rmm-canvas-${company}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearActiveCanvas() {
  const canvas = getActiveCanvas();
  if (!window.confirm(`Limpar as respostas de "${canvas.title}"?`)) return;
  state.answers[canvas.id] = {};
  saveState();
  render();
}

function render() {
  const canvas = getActiveCanvas();
  elements.title.textContent = canvas.title;
  elements.subtitle.textContent = canvas.subtitle;
  elements.phase.textContent = canvas.phase;
  elements.stepCount.textContent = `${canvas.fields.length} blocos`;
  renderNav(); renderMethodStrip(canvas); renderFields(canvas); updateProgressAndSummary(canvas); renderAgent(canvas);
}

elements.exportButton.addEventListener('click', exportAnswers);
elements.filledPdfButton.addEventListener('click', () => createCanvasPdf('filled'));
elements.blankPdfButton.addEventListener('click', () => createCanvasPdf('blank'));
elements.clearButton.addEventListener('click', clearActiveCanvas);
elements.agentToggle.addEventListener('click', () => { state.agentOpen = true; saveState(); renderAgent(getActiveCanvas()); });
elements.agentClose.addEventListener('click', () => { state.agentOpen = false; saveState(); renderAgent(getActiveCanvas()); });
elements.chatForm.addEventListener('submit', (event) => { event.preventDefault(); sendAgentMessage(elements.chatInput.value); });
elements.agentConfigSave.addEventListener('click', saveAgentConfig);
renderAgentConfig();
renderMeta();
render();












