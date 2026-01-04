import { GoogleGenAI } from "@google/genai";

export const getTaxAdvice = async (userQuery: string) => {
  try {
    // Guidelines: Always use process.env.API_KEY directly in the constructor.
    // The SDK will throw an error if this is undefined, which we catch below.
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
      throw new Error("Received an empty response from the AI model.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    
    // Catch local SDK validation errors (e.g., missing key) or server-side 401/403 errors.
    const errorMessage = error?.message || "";
    if (errorMessage.includes("API Key") || errorMessage.includes("apiKey") || !process.env.API_KEY) {
      return "CONFIG_ERROR_MISSING_KEY";
    }
    
    return "I'm having trouble connecting to the AI brain right now. Please reach out to Lucia directly using the contact form below.";
  }
};