'use client'

import { ChevronRight } from 'lucide-react'
import { SideLink } from '@/data/sidelinks'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Link } from 'react-router-dom'
import useCheckActiveNav from '@/hooks/use-check-active-nav'
import { useTranslation } from '@/contexts'

interface NavMainProps {
    links: SideLink[]
    groupLinksLabel: boolean
}

export function SideBarContents({ links, groupLinksLabel }: NavMainProps) {
    const { checkActiveNav } = useCheckActiveNav()
    const { t } = useTranslation()

    return (
        <SidebarGroup>
            {groupLinksLabel && <SidebarGroupLabel>{t('admin-panel.header')}</SidebarGroupLabel>}

            <SidebarMenu>
                {links.map((item) => {
                    //if there is no child items then just return it as a single item
                    if (!item.items) {
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link
                                        to={item.url}
                                        className={cn(
                                            'sidebar-link flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700',
                                            checkActiveNav(item.url) ? 'bg-gray-200 dark:bg-gray-700' : ''
                                        )}
                                    >
                                        {item.icon && <item.icon />}
                                        <span>{t(`admin-panel.${item.key}`)}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    }

                    return (
                        <Collapsible key={item.title} asChild defaultOpen={item.isActive} className='group/collapsible'>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items.map((subItem: SideLink) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                    <Link
                                                        to={subItem.url}
                                                        className={cn(
                                                            'sidebar-link flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700',
                                                            checkActiveNav(item.url)
                                                                ? 'bg-gray-200 dark:bg-gray-700'
                                                                : ''
                                                        )}
                                                    >
                                                        <span>{subItem.title}</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
