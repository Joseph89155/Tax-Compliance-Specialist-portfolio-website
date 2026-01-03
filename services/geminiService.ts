
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTaxAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are an AI assistant for Lucia Maina, a professional Tax Compliance and Bookkeeping Consultant based in Nairobi, Kenya. 
        Your goal is to answer general tax or bookkeeping questions professionally. 
        Always include a disclaimer that specific financial advice should be confirmed with Lucia directly. 
        Promote Lucia's services: Comprehensive Financial Records, Strategic Tax Preparation, Seamless Compliance, Payroll Management, and Regulatory Advisory.
        Keep answers concise and helpful.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please reach out to Lucia directly using the contact form below.";
  }
};
