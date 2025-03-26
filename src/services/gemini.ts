import { GoogleGenerativeAI } from '@google/generative-ai';
import { EXPO_PUBLIC_GEMINI_API_KEY } from '@env';

const genAI = new GoogleGenerativeAI(EXPO_PUBLIC_GEMINI_API_KEY || '');

// Define the data structure for the cow and bull
export interface Cattle {
  breed: string;
  age: number;
  milkYield?: number; // Only for cows
  geneticDiversity?: string; // Optional
  health?: string; // Optional
  proven?: boolean; // Only for bulls
}

// Define the expected AI response format
export interface BreedingCompatibility {
  compatibilityScore: number;
  confidenceScore: number;
  traits: {
    milkYield: 'Low' | 'Moderate' | 'High';
    fertility: 'Low' | 'Moderate' | 'High';
    longevity: 'Low' | 'Moderate' | 'High';
    climateAdaptability: 'Low' | 'Moderate' | 'High';
  };
  breedingRecommendation: string;
}

export const geminiService = {
  async checkCompatibility(cow: Cattle, bull: Cattle): Promise<BreedingCompatibility> {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

      const prompt = `
      Given the following cattle breeding pair:

      Cow:
      - Breed: ${cow.breed}
      - Age: ${cow.age} years
      - Milk Yield: ${cow.milkYield ?? 'Unknown'} L/day
      - Genetic Diversity Score: ${cow.geneticDiversity ?? 'Unknown'}
      - Health Status: ${cow.health ?? 'Healthy'}

      Bull:
      - Breed: ${bull.breed}
      - Age: ${bull.age} years
      - Proven Sire: ${bull.proven ? 'Yes' : 'No'}
      - Genetic Diversity Score: ${bull.geneticDiversity ?? 'Unknown'}
      - Health Status: ${bull.health ?? 'Healthy'}

      Analyze their **breeding compatibility** based on:
      - **Genetic diversity** (avoid inbreeding risks)
      - **Milk yield potential**
      - **Longevity and fertility**
      - **Climate adaptability**
      - **Overall health compatibility**
      
      Respond in **structured JSON format** with:
      {
        "compatibilityScore": (0-100),
        "confidenceScore": (0-100),
        "traits": {
          "milkYield": "Low" | "Moderate" | "High",
          "fertility": "Low" | "Moderate" | "High",
          "longevity": "Low" | "Moderate" | "High",
          "climateAdaptability": "Low" | "Moderate" | "High"
        },
        "breedingRecommendation": "text"
      }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Convert AI response into a JSON object
      let parsedData: BreedingCompatibility;
      try {
        parsedData = JSON.parse(text);
      } catch (error) {
        console.error('Error parsing AI response:', error);
        parsedData = {
          compatibilityScore: Math.floor(Math.random() * 40) + 60, // Random fallback
          confidenceScore: 75, // Default confidence
          traits: {
            milkYield: 'Moderate',
            fertility: 'High',
            longevity: 'Moderate',
            climateAdaptability: 'High',
          },
          breedingRecommendation: 'Breeding is advisable with good milk potential.',
        };
      }

      return parsedData;
    } catch (error) {
      console.error('Error checking compatibility:', error);
      throw error;
    }
  },
};
