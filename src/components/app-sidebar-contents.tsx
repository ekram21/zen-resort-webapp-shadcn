"use client"

import { ChevronRight } from "lucide-react"
import { SideLink } from "@/data/sidelinks"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import useCheckActiveNav from '@/hooks/use-check-active-nav'

interface NavMainProps {
    links: SideLink[];
    groupLinksLabel: boolean;
}

export function SideBarContents({ links, groupLinksLabel }: NavMainProps) {

    const { checkActiveNav } = useCheckActiveNav();

    return (
        <SidebarGroup>

            {groupLinksLabel && <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>}

            <SidebarMenu>
                {links.map((item) => {
                        
                        //if there is no child items then just return it as a single item
                        if (!item.items) {
                                return (
                                        <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                        <Link to={item.url} className={cn("sidebar-link flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200", checkActiveNav(item.url) ? "bg-gray-200 dark:bg-gray-700": "")}>
                                                                {item.icon && <item.icon />}
                                                                <span>{item.title}</span>
                                                        </Link>
                                                </SidebarMenuButton>
                                        </SidebarMenuItem>
                                )
                        }
                        
                        return (
                        <Collapsible
                                key={item.title}
                                asChild
                                defaultOpen={item.isActive}
                                className="group/collapsible"
                        >
                                <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                        <SidebarMenuSub>
                                        {item.items.map((subItem: SideLink) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton asChild>
                                                        <Link to={subItem.url} className={cn("sidebar-link flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200", checkActiveNav(item.url) ? "bg-gray-200 dark:bg-gray-700": "")}>
                                                                <span>{subItem.title}</span>
                                                        </Link>
                                                </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                        ))}
                                        </SidebarMenuSub>
                                </CollapsibleContent>

                                </SidebarMenuItem>
                        </Collapsible>
                        )})}
            </SidebarMenu>

        </SidebarGroup>
    )
}
