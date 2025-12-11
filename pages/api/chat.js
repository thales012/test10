export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método inválido. Use POST." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY não configurada." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const message = body.message || "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Você é o Professor Lucas, um professor de Português extremamente didático, paciente e amigável. Explique sempre passo a passo, com exemplos simples."
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Não consegui gerar uma resposta agora.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Erro na rota /api/chat:", err);
    return res.status(500).json({ error: "Erro interno ao falar com o Professor Lucas." });
  }
}
