
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAzmuthResponse = async (userPrompt: string) => {
  if (!API_KEY) return "Erro: Chave de API não configurada.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Você é Azmuth, o criador do Omnitrix. Você é brilhante, um pouco impaciente com 'seres inferiores' mas disposto a ensinar quem quer se tornar um Encanador. Responda em português, use termos técnicos do universo Ben 10 e seja um pouco arrogante porém útil.",
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Minha paciência é curta e minha conexão galáctica falhou. Tente novamente.";
  }
};
