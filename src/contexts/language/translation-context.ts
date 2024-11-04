
import { createContext } from 'react'

interface TranslationContextType {
  // Define the shape of your context here
  language: string;
  setLanguage: (language: string) => void;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined)