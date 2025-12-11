# Teacher Lucas - Vercel

Projeto Next.js 14 + Builder.io (rotas dinâmicas) + API do Professor Lucas.

## Variáveis de ambiente na Vercel

- `OPENAI_API_KEY`: sua chave de API da OpenAI.

## Rotas

- `/` -> carrega a página `/` do Builder (modelo `page`)
- qualquer outra rota (ex: `/login`, `/dashboard`, `/profile`) -> é buscada no Builder automaticamente via `[...page].js`

## API

- `POST /api/chat` com JSON `{ "message": "sua pergunta" }` -> responde com o texto do Professor Lucas.
