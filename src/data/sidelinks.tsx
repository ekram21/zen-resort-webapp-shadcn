import {
  IconLayoutDashboard,
  IconSettings,
  IconBowl,
  IconDoor,
  IconHotelService,
  IconUsers
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/app',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Rooms',
    label: '',
    href: '/app/rooms',
    icon: <IconDoor size={18} />,
  },
  {
    title: 'In-Room Dining',
    label: '',
    href: '/app/dining',
    icon: <IconBowl size={18} />,
  },
  {
    title: 'Services',
    label: '',
    href: '/app/services',
    icon: <IconHotelService size={18} />,
  },
  {
    title: 'Guests',
    label: '',
    href: '/app/guests',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/app/settings',
    icon: <IconSettings size={18} />,
  },
]
