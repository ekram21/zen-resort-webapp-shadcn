import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
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

export default function ZenBusinessAdmins() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
            <TopNav links={topNav} />
            <div className='ml-auto flex items-center space-x-4'>
                <ThemeSwitch />
            </div>
        </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Zen Business Admin</h2>
            <p className='text-muted-foreground'>
              Warning! This is a restricted area and meant to be operated by authorized personnel from Zen only.
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>

        </div>
      </Layout.Body>
    </Layout>
  )
}
