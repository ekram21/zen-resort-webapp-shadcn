import { LayoutDashboard, Settings2, BedDouble, Soup, HandPlatter, UserRound, type LucideIcon } from 'lucide-react'

export interface NavLink {
    title: string
    key: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: SideLink[] // Define items as an array of SideLink objects
}

export interface SideLink extends NavLink {
    items?: SideLink[]
}

export const sidelinks: SideLink[] = [
    {
        title: 'Dashboard',
        key: 'dashboard',
        url: '/app',
        icon: LayoutDashboard,
    },
    {
        title: 'Rooms',
        key: 'rooms',
        url: '/app/rooms',
        icon: BedDouble,
    },
    {
        title: 'In-Room Dining',
        key: 'dining',
        url: '/app/dining',
        icon: Soup,
    },
    {
        title: 'Services',
        key: 'services',
        url: '/app/services',
        icon: HandPlatter,
    },
    {
        title: 'Guests',
        key: 'guests',
        url: '/app/guests',
        icon: UserRound,
    },
    {
        title: 'Settings',
        key: 'settings',
        url: '/app/settings',
        icon: Settings2,
    },
]
