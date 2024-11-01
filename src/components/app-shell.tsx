import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from './skip-to-main'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import { database } from '../firebase';
import { ref, child, off, onValue, DataSnapshot, DatabaseReference } from "firebase/database";
import { setSelfInfo } from '@/redux/actions/database';
import { useDispatch } from 'react-redux';

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function AppShell() {

    const [isCollapsed, setIsCollapsed]         = useIsCollapsed();
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const isFirstLoad                           = useRef(true);   
    const [loggedInAuth, setLoggedInAuth]       = useState<string | undefined>(undefined);
    const dispatch                              = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser?.uid) {
                setLoggedInAuth(firebaseUser?.uid);
            }
            else{
                console.log('No Logged-In-User Detected, so redirecting to login page');
                setRedirectToLogin(true);
            }
        });
        return () => unsubscribe();
    }, []);


    useEffect(() => {
        let selfInfoRef: DatabaseReference | undefined; // variable to hold reference for cleanup

        if (loggedInAuth && isFirstLoad.current === true) {
            console.log('Set up initial Store & Bindings for: ', loggedInAuth);
            isFirstLoad.current = false;

            selfInfoRef = child(ref(database), `ZEN-Business-Accounts/${loggedInAuth}/SelfInfo`);
            onValue(selfInfoRef, (snapshot: DataSnapshot) => {
                const data = snapshot.val();
                dispatch(setSelfInfo(data));
            });
        }

        return ()=>{
            //cleanup and unsubscribe from all listeners
            if (selfInfoRef) {
                off(selfInfoRef); // Unsubscribe from the specific listener
            }
        }
    }, [loggedInAuth, dispatch]);

    if (redirectToLogin) {
        return <Navigate to='/sign-in' replace/>;
    }

    return     <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        <Outlet />
        </div>
    </SidebarInset>
  </SidebarProvider>

    // return <div className='relative h-full overflow-hidden bg-background'>
    //     <SkipToMain />
    //     {/* <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} /> */}
    //     <main
    //         id='content'
    //         className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
    //     >
            
    //     </main>
    // </div>
}
