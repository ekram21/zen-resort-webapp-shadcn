import { Outlet, Navigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import { database } from '../firebase'
import {
  ref,
  child,
  off,
  onValue,
  DataSnapshot,
  DatabaseReference,
} from 'firebase/database'
import { setSelfInfo } from '@/redux/actions/database'
import { useDispatch } from 'react-redux'

// import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { AppSidebar } from '@/components/app-sidebar'

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import LanguageSelect from './language-select'

export default function AppShell() {
    const [redirectToLogin, setRedirectToLogin] = useState(false)

    const isFirstLoad = useRef(true)
    const [loggedInAuth, setLoggedInAuth] = useState<string | undefined>(
        undefined
    )
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser?.uid) {
            setLoggedInAuth(firebaseUser?.uid)
        } else {
            console.log('No Logged-In-User Detected, so redirecting to login page')
            setRedirectToLogin(true)
        }
        })
        return () => unsubscribe()
    }, [])

  useEffect(() => {
    let selfInfoRef: DatabaseReference | undefined // variable to hold reference for cleanup

    if (loggedInAuth && isFirstLoad.current === true) {
      console.log('Set up initial Store & Bindings for: ', loggedInAuth)
      isFirstLoad.current = false

      selfInfoRef = child(
        ref(database),
        `ZEN-Business-Accounts/${loggedInAuth}/SelfInfo`
      )
      onValue(selfInfoRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val()
        dispatch(setSelfInfo(data))
      })
    }


    return () => {
        //cleanup and unsubscribe from all listeners
        if (selfInfoRef) {
            off(selfInfoRef) // Unsubscribe from the specific listener
        }
        }
    }, [loggedInAuth, dispatch])

    if (redirectToLogin) {
        return <Navigate to='/sign-in' replace />
    }


    return  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
        <header className="flex pt-1 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-between gap-2 px-4 w-full">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                </div>
                <div className='ml-auto flex items-center space-x-4'>
                    <ThemeSwitch />
                    <LanguageSelect />
                </div>
            </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Outlet />
        </div>
    </SidebarInset>
    </SidebarProvider>
}
