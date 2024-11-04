import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useTranslation } from '../hooks/useTranslation'
import { IconCheck } from '@tabler/icons-react'
import { cn } from '../lib/utils'

export default function LanguageSelect() {
    const { t, setLanguage, languages, language } = useTranslation()
    const selectedLanguage = languages?.find((lang) => lang.value === language)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex items-center gap-2'>
                    <img
                        src={selectedLanguage.icon}
                        alt={`{selectedLanguage.label} Flag`}
                        width={20}
                        height={20}
                        className='rounded-full'
                        style={{ aspectRatio: '20/20', objectFit: 'cover' }}
                    />
                    <span className='font-medium'>{selectedLanguage.label}</span>
                    <ChevronDownIcon className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[100px]'>
                <DropdownMenuGroup>
                    {languages &&
                        languages.map((language) => {
                            return (
                                <DropdownMenuItem key={language.value} onClick={() => setLanguage(language.value)}>
                                    <div className='flex items-center gap-2'>
                                        <img
                                            src={language.icon}
                                            alt={`${language.label} Flag`}
                                            width={20}
                                            height={20}
                                            className='rounded-full'
                                            style={{
                                                aspectRatio: '20/20',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <span>{language.label}</span>
                                    </div>
                                    <IconCheck
                                        size={14}
                                        className={cn('ml-auto', selectedLanguage.value !== language.value && 'hidden')}
                                    />
                                </DropdownMenuItem>
                            )
                        })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <path d='m6 9 6 6 6-6' />
        </svg>
    )
}
