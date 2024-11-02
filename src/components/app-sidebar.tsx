import * as React from "react"
import {
  Hotel
} from "lucide-react"

import { sidelinks } from "@/data/sidelinks";

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SideBarTopLogo } from "./SideBarTopLogo";


const CompanyData = {
    name: process.env.VITE_PRODUCT_NAME ? process.env.VITE_PRODUCT_NAME : '...',
    logo: Hotel,
    plan: "Enterprise",
}



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const selfInfoInLocalDb                     = useSelector((state: RootState) => state.database.SelfInfo);

    return (
        <Sidebar collapsible="icon" {...props}>

            <SidebarHeader>
                <SideBarTopLogo companyData={CompanyData} />
            </SidebarHeader>

            <SidebarContent>
                <NavMain links={sidelinks} groupLinksLabel={true}/>
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={{
                    name: selfInfoInLocalDb?.name ? selfInfoInLocalDb?.name : '...',
                    email: selfInfoInLocalDb?.email ? selfInfoInLocalDb?.email : '...',
                    avatar: selfInfoInLocalDb?.avatar ? selfInfoInLocalDb?.avatar : '/avatars/shadcn.jpg',
                }} />
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
