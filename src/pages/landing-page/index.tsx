
import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'

import HeaderUnrestrictedPages from '@/components/header-unrestricted-pages'
import zenLogo from "@/assets/images/landing-page/landingPageHero.png"
import ProductFeatures from '@/components/animata/hero/product-features'
import FUIHeroSectionWithLogoClouds from '@/components/farm-ui/farmui/FUIHeroLogoCompany'



  
export default function LandingPage() {


    return (
        <Layout>
        {/* ===== Top Heading ===== */}

        <FUIHeroSectionWithLogoClouds />
        <Layout.Header>
            <HeaderUnrestrictedPages activeRoute='/' />
            <div className='ml-auto flex items-center space-x-4'>
                <ThemeSwitch />
            </div>
        </Layout.Header>

        {/* className='space-y-4' */}
        <Layout.Body className='space-y-4'>

            

            <div className='flex items-center justify-evenly space-x-4 p-10 pt-10'>

                <div className='flex flex-col items-start space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        ZEN Hotel/Resort App
                    </h1>
                    <h2 className='text-lg font-bold md:text-xl'>Hotel-guest management services</h2>
                </div>

                <img src={zenLogo} alt='zen-logo' className='w-1/2' />

            </div>

            <ProductFeatures />

            <footer className="py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <a
                        href={"https://www.linkedin.com/in/m-ekram/"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Ekram
                    </a>
                    . This is a project in alpha phase for{" "}
                    <a
                        href={"https://di.vc/pages/about-us"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        DIVC
                    </a>
                    .
                    </p>
                </div>
            </footer>

        </Layout.Body>


        </Layout>
    )
}
