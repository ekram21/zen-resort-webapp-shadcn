import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '@/components/custom/layout'
import { Breadcrumb, BreadcrumbItem } from '@/components/custom/breadcrumb'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { TopNav } from '@/components/top-nav'

const topNav = [
    {
      title: 'Home',
      href: '/',
      isActive: true,
    },
    {
      title: 'Sign-In',
      href: '/sign-in',
      isActive: false,
    },
  ]

  
export default function LandingPage() {


    return (
        <Layout>
        {/* ===== Top Heading ===== */}
        <Layout.Header>
            <TopNav links={topNav} />
            <div className='ml-auto flex items-center space-x-4'>
                <ThemeSwitch />
            </div>
        </Layout.Header>

        {/* className='space-y-4' */}
        <Layout.Body className='space-y-4'>

            <div className='flex items-center justify-between space-y-2 p-10 pt-10'>

                <div className='flex flex-col items-start justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        ZEN Hotel/Resort App
                    </h1>
                    <h2 className='text-lg font-bold md:text-xl'>The future of hotel-guest management services</h2>
                </div>



            </div>

        </Layout.Body>
        </Layout>
    )
}
