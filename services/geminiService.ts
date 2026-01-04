
import { GoogleGenAI } from "@google/genai";

export const getTaxAdvice = async (userQuery: string) => {
  try {
    // Adhering to strict guidelines: Initialize fresh instance inside function
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `You are an AI assistant for Lucia Maina, a professional Tax Compliance and Bookkeeping Consultant in Nairobi. 
        Provide general educational information regarding KRA compliance (VAT, Turnover Tax, eTIMS) and bookkeeping.
        Tone: Professional, expert, and trustworthy.
        Always conclude with: "For specific advice tailored to your business, please schedule a consultation with Lucia directly."`,
        temperature: 0.7,
      },
    });

    if (!response.text) {
      throw new Error("Empty response");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check if it's an API Key specific error
    if (error?.message?.includes('API_KEY') || !process.env.API_KEY) {
      return "CONFIG_ERROR_MISSING_KEY";
    }
    
    return "I'm having trouble connecting to the AI brain right now. Please reach out to Lucia directly using the contact form below.";
  }
};
