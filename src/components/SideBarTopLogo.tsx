import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function SideBarTopLogo({
  companyData
}: {
    companyData: {
    name: string
    logo: React.ElementType
    plan: string
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <Link to={'/'}>
                <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <companyData.logo className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                    {companyData.name}
                    </span>
                    <span className="truncate text-xs">{companyData.plan}</span>
                </div>
                </SidebarMenuButton>
            </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
