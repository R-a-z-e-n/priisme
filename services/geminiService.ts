
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // A real app would have better error handling, but for this context,
  // we'll log a warning. The app will still run with mock data.
  console.warn("API_KEY environment variable not set. Gemini API features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      }
    };
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export const generateOutfitSuggestion = async (style: string, occasion: string, colors: string): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("AI features are disabled. Please set your API_KEY. As a placeholder, here is a suggestion: A classic white t-shirt, dark wash jeans, and white sneakers. This is a timeless and versatile look.");
    }
    try {
        const prompt = `Generate a fashion outfit suggestion based on these preferences: Style: ${style}, Occasion: ${occasion}, Preferred Colors: ${colors}. Describe the outfit in a catchy, stylish way.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating outfit suggestion:", error);
        return "Sorry, I couldn't come up with an outfit right now. Please try again later.";
    }
};

export const findSimilarProductsFromImage = async (imageFile: File): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("AI features are disabled. Please set your API_KEY. Based on your image, we suggest looking at our 'Trending Now' collection for similar styles.");
    }
    try {
        const imagePart = await fileToGenerativePart(imageFile);
        const prompt = "Analyze the fashion items in this image. Describe the main clothing item's style, color, and type. Then, suggest 3 search terms I can use to find similar items in an e-commerce store.";
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, { text: prompt }] },
        });

        return response.text;
    } catch (error) {
        console.error("Error analyzing image:", error);
        return "Sorry, I couldn't analyze the image. Please try again with a different one.";
    }
};
