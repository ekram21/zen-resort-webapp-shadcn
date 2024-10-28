import { TopNav } from '@/components/top-nav'

export default function HeaderUnrestrictedPages({ activeRoute }: { activeRoute: string }) {
    const topNav = [
        {
            title: 'Home',
            href: '/',
            isActive: activeRoute === '/',
        },
        {
            title: 'Sign-In',
            href: '/sign-in',
            isActive: activeRoute === '/sign-in',
        },
        {
            title: 'Zen Admins',
            href: '/zen-business-admins',
            isActive: activeRoute === '/zen-business-admins',
        },
    ]

    return (
        <TopNav links={topNav} />
    )
}
