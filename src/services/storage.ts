import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export interface Animal {
  id: string;
  type: 'cow' | 'bull';
  breed: string;
  age: number;
  health: string;
  milkYield?: number;
  proven?: boolean;
  createdAt: string;
  updatedAt: string;
}

const ANIMALS_KEY = '@livestock_animals';

export const storageService = {
  async getAnimals(): Promise<Animal[]> {
    try {
      const data = await AsyncStorage.getItem(ANIMALS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting animals:', error);
      return [];
    }
  },

  async addAnimal(animal: Omit<Animal, 'id' | 'createdAt' | 'updatedAt'>): Promise<Animal> {
    try {
      const animals = await this.getAnimals();
      const newAnimal: Animal = {
        ...animal,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      await AsyncStorage.setItem(ANIMALS_KEY, JSON.stringify([...animals, newAnimal]));
      return newAnimal;
    } catch (error) {
      console.error('Error adding animal:', error);
      throw error;
    }
  },

  async updateAnimal(id: string, updates: Partial<Animal>): Promise<Animal | null> {
    try {
      const animals = await this.getAnimals();
      const index = animals.findIndex(a => a.id === id);
      
      if (index === -1) return null;
      
      const updatedAnimal = {
        ...animals[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      
      animals[index] = updatedAnimal;
      await AsyncStorage.setItem(ANIMALS_KEY, JSON.stringify(animals));
      return updatedAnimal;
    } catch (error) {
      console.error('Error updating animal:', error);
      throw error;
    }
  },

  async deleteAnimal(id: string): Promise<boolean> {
    try {
      const animals = await this.getAnimals();
      const filtered = animals.filter(a => a.id !== id);
      await AsyncStorage.setItem(ANIMALS_KEY, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Error deleting animal:', error);
      throw error;
    }
  },
};