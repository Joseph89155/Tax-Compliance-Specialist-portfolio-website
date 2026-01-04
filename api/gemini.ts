import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userQuery } = req.body;

    if (!userQuery) {
      return res.status(400).json({ error: "Missing user query" });
    }

    if (!process.env.API_KEY) {
      console.error("API_KEY missing on server");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `
You are an AI assistant for Lucia Maina, a professional Tax Compliance and Bookkeeping Consultant in Nairobi.
Provide general educational information regarding KRA compliance (VAT, Turnover Tax, eTIMS) and bookkeeping.
Tone: Professional, expert, and trustworthy.
Always conclude with:
"For specific advice tailored to your business, please schedule a consultation with Lucia directly."
        `,
        temperature: 0.7,
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Gemini Server Error:", error);
    return res.status(500).json({
      error: "AI service temporarily unavailable",
    });
  }
}
