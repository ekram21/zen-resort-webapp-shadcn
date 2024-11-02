

import {
    LayoutDashboard,
    Settings2, BedDouble, Soup, HandPlatter, UserRound, type LucideIcon
  } from "lucide-react"

export interface NavLink {
title: string;
url: string;
icon?: LucideIcon;
isActive?: boolean;
items?: SideLink[]; // Define items as an array of SideLink objects
}
  
export interface SideLink extends NavLink {
items?: {
    title: string;
    url: string;
}[];
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    url: '/app',
    icon: LayoutDashboard,
  },
  {
    title: 'Rooms',
    url: '/app/rooms',
    icon: BedDouble,
  },
  {
    title: 'In-Room Dining',
    url: '/app/dining',
    icon: Soup,
  },
  {
    title: 'Services',
    url: '/app/services',
    icon: HandPlatter,
  },
  {
    title: 'Guests',
    url: '/app/guests',
    icon: UserRound,
  },
  {
    title: 'Settings',
    url: '/app/settings',
    icon: Settings2,
  },
]
