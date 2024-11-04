import { useCallback, useEffect, useMemo, useState } from 'react'
import en from '../locale/en.json'
import bd from '../locale/bd.json'
import es from '../locale/es.json'
import fr from '../locale/fr.json'
import { TranslationContext } from './translationContext'

//add a type for import of en
type Translation = typeof en



type TranslationProviderProps = {
    children: React.ReactNode
}

const supportedLanguages = process.env.VITE_LANGUAGES?.split(',')

const supportedTranslations: { [key: string]: Translation } = {
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

    const [translations, setTranslations] = useState<Translation | undefined>()

    useEffect(() => {
        setTranslations(supportedTranslations[language])
    }, [language])

    const t = useCallback((key: string, translation: Translation | undefined = translations) => {
        if (!translation) return key;
        const index = key.indexOf('.')
        const topKey = key.slice(0, index)
        const nestedTranslation = translation[topKey as keyof Translation]
        if (index === -1) {
            return translation[key as keyof Translation] || key
        }
        if (nestedTranslation === undefined) {
            return key
        }
        return t(key.slice(index + 1), nestedTranslation as unknown as Translation)
    }, [translations])

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
        [language, translations, languages, t]
    )

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    )
}
