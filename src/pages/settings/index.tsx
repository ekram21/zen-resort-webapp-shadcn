import { Outlet } from 'react-router-dom'
import {
  IconTool,
} from '@tabler/icons-react'
import { Layout } from '@/components/custom/layout'
import { Separator } from '@/components/ui/separator'
import SidebarNav from './components/sidebar-nav'

export default function Settings() {
  return (
    <Layout fixed>

      <Layout.Body className='flex flex-col'>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Settings
          </h1>
          <p className='text-muted-foreground'>
            Manage your account settings and set preferences
          </p>
        </div>
        <Separator className='my-4 lg:my-6' />
        <div className='flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex w-full p-1 pr-4 md:overflow-y-hidden'>
            <Outlet />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}

const sidebarNavItems = [
  {
    title: 'Profile',
    icon: <IconTool size={18} />,
    href: '/app/settings',
  },
//   {
//     title: 'Account',
//     icon: <IconTool size={18} />,
//     href: '/app/settings/account',
//   },
//   {
//     title: 'Appearance',
//     icon: <IconPalette size={18} />,
//     href: '/app/settings/appearance',
//   },
//   {
//     title: 'Notifications',
//     icon: <IconNotification size={18} />,
//     href: '/app/settings/notifications',
//   },
//   {
//     title: 'Display',
//     icon: <IconBrowserCheck size={18} />,
//     href: '/app/settings/display',
//   },
//   {
//     title: 'Error Example',
//     icon: <IconExclamationCircle size={18} />,
//     href: '/app/settings/error-example',
//   },
]
