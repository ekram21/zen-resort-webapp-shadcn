import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import HeaderUnrestrictedPages from '@/components/header-unrestricted-pages'
import { useState } from 'react';
import { Card } from '@/components/ui/card'
import { OtpForm } from './components/otp-form';

export default function ZenBusinessAdmins() {

    const [isPinVerified, setIsPinVerified]         = useState(false);

    return (
        <Layout>
        {/* ===== Top Heading ===== */}
        <Layout.Header>
                <HeaderUnrestrictedPages activeRoute='/zen-business-admins' />
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                </div>
            </Layout.Header>

        <Layout.Body>

            {isPinVerified === false ? 
                <>
                
                    <div className='flex items-center justify-center' style={{ height: '80vh' }}>
                        <div>
                            <Card className='p-6'>
                                <div className='mb-2 flex flex-col space-y-2 text-left'>
                                    <h1 className='text-md font-semibold tracking-tight'>
                                        Zen Business Admin
                                    </h1>
                                    <p className='text-sm text-muted-foreground'>
                                        Please enter the special code to access this area.
                                    </p>
                                </div>
                                <OtpForm verify_pin_callback={setIsPinVerified}/>
                            </Card>
                        </div>
                    </div>
                
                </> 
                : 
                <>
                
                
                
                </>
            }


        </Layout.Body>
        </Layout>
    )
}
