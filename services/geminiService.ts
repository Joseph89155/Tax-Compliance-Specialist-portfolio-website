
import { GoogleGenAI } from "@google/genai";

export const getTaxAdvice = async (userQuery: string) => {
  // Access the API Key from the environment
  const apiKey = process.env.API_KEY;
  
  // Robust check: if the key is missing, return a helpful error instead of crashing
  if (!apiKey || apiKey === "undefined" || apiKey.length < 10) {
    console.warn("AI Assistant: API_KEY is missing or invalid in environment variables.");
    return "CONFIGURATION_REQUIRED";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are an AI assistant for Lucia Maina, a professional Tax Compliance and Bookkeeping Consultant in Nairobi. 
        Answer general questions about KRA compliance, turnover tax, VAT, and bookkeeping. 
        Tone: Professional, expert, and trustworthy.
        Disclaimer: Always remind users that specific tax advice should be confirmed with Lucia directly.`,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI brain right now. Please reach out to Lucia directly using the contact form below.";
  }
};
