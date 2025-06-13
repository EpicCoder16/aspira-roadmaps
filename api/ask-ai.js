export const config = {
    runtime: 'edge', // use Vercel Edge Runtime
  };
  
  export default async function handler(req) {
    const { prompt } = await req.json();
  
    const apiKey = process.env.OPENROUTER_API_KEY;
  
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });
  
    const data = await response.json();
  
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  }
  
