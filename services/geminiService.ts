
import { GoogleGenAI } from "@google/genai";

export const getAIProjectAdvice = async (projectDescription: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the Senior Project Consultant for Sow Construction and Trading Sierra Leone Ltd. 
      Analyze this project and provide 3-4 professional insights including site preparation, material suggestions (trading), and engineering challenges specific to the Sierra Leone context (climate, terrain, etc).
      Keep it professional, brief, and bulleted.
      Project Description: ${projectDescription}`,
      config: {
        systemInstruction: "You are an expert civil engineer and project manager. Your advice is authoritative yet helpful. Use industry terminology.",
        temperature: 0.7,
        maxOutputTokens: 600,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unable to provide an analysis. Please contact our main office for a professional consultation.";
  }
};
