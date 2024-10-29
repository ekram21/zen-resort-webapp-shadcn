
import { Layout } from '@/components/custom/layout'
import ProductFeatures from '@/components/animata/hero/product-features'
import FUIHeroSectionWithLogoClouds from '@/components/farm-ui/farmui/FUIHeroLogoCompany'



  
export default function LandingPage() {


    return (
        <Layout>
        {/* ===== Top Heading ===== */}

        <FUIHeroSectionWithLogoClouds />

        {/* className='space-y-4' */}
        <Layout.Body className='space-y-4'>

            
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
