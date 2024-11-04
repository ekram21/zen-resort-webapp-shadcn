import { createContext, useEffect, useMemo, useState } from 'react'
import en from '../../public/locale/en.json'
import bd from '../../public/locale/bd.json'
import es from '../../public/locale/es.json'
import fr from '../../public/locale/fr.json'

export const TranslationContext = createContext<any>(undefined)

type TranslationProviderProps = {
    children: React.ReactNode
}

const supportedLanguages = process.env.VITE_LANGUAGES?.split(',')

const supportedTranslations = {
    en,
    bd,
    es,
    fr,
}

export function TranslationProvider({
    children,
}: TranslationProviderProps): JSX.Element {
    const [language, setLanguage] = useState<string>(
        supportedLanguages?.[0] || 'en'
    )
    const [translations, setTranslations] = useState<any>()

    useEffect(() => {
        setTranslations(supportedTranslations[language])
    }, [language])

    const t = (key: string, translation: any = translations) => {
        const index = key.indexOf('.')
        console.log(key.slice(0, index))
        console.log(translation)
        console.log(translation[key.slice(0, index)])
        if (index === -1) {
            return translation[key] || key
        }
        if (translation[key.slice(0, index)] === undefined) {
            return key
        }
        return t(key.slice(index + 1), translation[key.slice(0, index)])
    }

    const languages = useMemo(() => {
        if (supportedLanguages) {
            return supportedLanguages?.map((language) => {
                const flagISO =
                    language === 'en' ? 'US' : language.toUpperCase()
                return {
                    label: language.toUpperCase(),
                    value: language,
                    icon: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${flagISO}.svg`,
                }
            })
        } else {
            return [
                {
                    label: 'EN',
                    value: 'en',
                    icon: `http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg`,
                },
            ]
        }
    }, [])

    const value = useMemo(
        () => ({
            t,
            language,
            setLanguage,
            translations,
            setTranslations,
            languages,
        }),
        [language, translations]
    )

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    )
}
