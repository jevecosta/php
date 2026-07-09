# Resolva Meu Marketing Canvas

Aplicativo web para guiar o preenchimento dos canvas da metodologia Resolva Meu Marketing.

## O que já existe

- Navegação por 12 canvas: SWOT, Produto, ICP B2C, ICP B2B, Jornada, Proposta de Valor, Oferta, Funil, Plano de Marketing, 5W2H, Dashboard e PDCA.
- Campos guiados por perguntas.
- Salvamento automático no navegador.
- Barra de progresso por canvas.
- Síntese automática do que foi preenchido.
- Aba lateral de chat com o Agente RMM.
- Modo local do agente quando o arquivo é aberto direto no navegador.
- Rota segura `/api/agent` pronta para conectar com a OpenAI na Vercel.
- Exportação das respostas em JSON.
- Impressão/salvar em PDF pelo navegador.

## Conectar com seu ChatGPT

O app não usa o login do site `chatgpt.com`. A conexão correta é pela API da OpenAI, com a chave guardada na Vercel.

1. Crie uma chave em https://platform.openai.com/api-keys.
2. Não cole essa chave no código e não envie a chave em conversas.
3. Na Vercel, abra o projeto e vá em Settings > Environment Variables.
4. Adicione:
   - `OPENAI_API_KEY`: sua chave da OpenAI.
   - `OPENAI_MODEL`: opcional. Exemplo: `gpt-5.6`.
5. Faça redeploy do projeto.
6. Abra o app pelo domínio da Vercel, não pelo arquivo `file://`.

Quando aberto por arquivo local, o painel mostra “Modo local” e não chama a API. Quando aberto pela Vercel, ele chama `/api/agent`, que por sua vez consulta a OpenAI com segurança.

## Como publicar na Vercel

1. Envie estes arquivos para um repositório no GitHub.
2. Na Vercel, clique em Add New Project.
3. Selecione o repositório.
4. Framework Preset: Other.
5. Build Command: deixe vazio.
6. Output Directory: deixe vazio ou use `.`.
7. Configure as variáveis acima.
8. Clique em Deploy.

## Como o agente funciona

O front-end envia para `/api/agent` o canvas ativo, os campos preenchidos, os campos pendentes, a pergunta do usuário e as últimas mensagens do chat. A rota chama a Responses API da OpenAI com um prompt de orientação da metodologia RMM e devolve a resposta para o painel lateral.

## Próximo passo recomendado

Quando quiser ter login, projetos por cliente e histórico salvo na nuvem, migre o armazenamento para Supabase mantendo esta experiência como base.

## Recursos novos

### Conectar agente GPT do cliente

No painel lateral existe a opção `Conectar agente GPT`. O cliente pode salvar:

- Nome do agente.
- Endpoint da API, por padrão `/api/agent`.
- Instruções personalizadas do agente.

Observação: links de GPTs do ChatGPT, como `chatgpt.com/g/...`, não funcionam como API direta. Para usar um GPT personalizado, copie as instruções dele para o campo de instruções ou aponte o endpoint para uma API própria compatível.

### PDF do canvas

No topo do app existem dois botões:

- `PDF preenchido`: gera uma versão de impressão com as respostas atuais.
- `PDF em branco`: gera uma versão limpa para preenchimento manual.

O navegador abre a janela de impressão; escolha `Salvar como PDF`.
