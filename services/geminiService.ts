
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o Consultor Estratégico da Metaline Ads, especialista em marketing para profissionais de saúde e fisioterapia (especificamente Osteopatia e Terapia Manual).
Seu objetivo é ajudar o Dr. Pedro Lima a entender e aplicar seu planejamento estratégico de social media.

Contexto do Planejamento do Dr. Pedro Lima:
- Foco: Terapia Manual, Osteopatia, Coluna e Dor.
- Ativos: Muita naturalidade em vídeo, clareza de nicho.
- Pilares: A Mágica da Terapia (Atração), Educação que Converte (Autoridade), Bastidores (Conexão).
- Meta: Agenda cheia com previsibilidade em 6 meses.
- Tom de voz: Profissional, encorajador, estratégico e direto.

Responda dúvidas sobre pautas, como gravar vídeos, como responder pacientes ou como melhorar o engajamento baseado nestes pilares.
`;

export async function getChatResponse(history: ChatMessage[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua resposta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro ao conectar com o consultor. Tente novamente mais tarde.";
  }
}
