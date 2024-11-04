import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

// Create a custom hook to access the context value
export function useTranslation() {
    const context = useContext(TranslationContext)

    if (!context) {
        throw new Error(
            'useTranslation must be used within a TranslationProvider'
        )
    }

    const { t, setLanguage, language, languages } = context

    return { t, setLanguage, language, languages }
}
