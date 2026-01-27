
import { GoogleGenAI, Type } from "@google/genai";
import { LabEquipmentInfo } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const schema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Common name of the equipment" },
    category: { type: Type.STRING, description: "Equipment category (e.g., Glassware, Electronic, Safety)" },
    description: { type: Type.STRING, description: "Brief overview of what it is" },
    primaryUse: { type: Type.STRING, description: "Main scientific function" },
    maintenanceTips: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "How to clean and store it properly" 
    },
    safetyPrecautions: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "Critical safety warnings" 
    },
    commonVariants: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "Other types or sizes" 
    },
    historicalContext: { type: Type.STRING, description: "Interesting fact or origin" }
  },
  required: ["name", "category", "description", "primaryUse", "maintenanceTips", "safetyPrecautions", "commonVariants"]
};

export const identifyEquipment = async (base64Image: string): Promise<LabEquipmentInfo> => {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Image } },
          { text: "Identify this laboratory equipment. Provide detailed information in the specified JSON format. If it is not lab equipment, return a professional message indicating it is not recognized." }
        ]
      }
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: schema
    }
  });

  const response = await model;
  const result = JSON.parse(response.text || "{}");
  return result as LabEquipmentInfo;
};
