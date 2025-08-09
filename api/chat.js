module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    // parse body safely
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const prompt = (body.prompt || '').toString().trim();
    if (!prompt) return res.status(400).json({ ok: false, error: 'Missing prompt' });
    if (prompt.length > 2000) return res.status(400).json({ ok: false, error: 'Prompt too long' });

    const systemPrompt = (process.env.SYSTEM_PROMPT || '').replace(/\\n/g, '\n');
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ ok: false, error: 'Server not configured' });

    // call OpenAI
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        temperature: 0.7,
        max_tokens: 500,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ ok: false, error: 'Upstream error' });
    }

    const text = data?.choices?.[0]?.message?.content?.trim() || '';
    return res.status(200).json({ ok: true, text });
  } catch (err) {
    console.error('chat route error:', err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
};

