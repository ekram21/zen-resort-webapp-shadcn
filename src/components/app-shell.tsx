import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from './skip-to-main'
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function AppShell() {

    const [isCollapsed, setIsCollapsed]         = useIsCollapsed();
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser?.uid) {
                console.log('Logged-In User Detected: ', firebaseUser);
            }
            else{
                console.log('No Logged-User Detected, so redirecting to login page');
                setRedirectToLogin(true);
            }
        });
        return () => unsubscribe();
    }, []);

    if (redirectToLogin) {
        return <Navigate to='/sign-in' replace/>;
    }

    return <div className='relative h-full overflow-hidden bg-background'>
        <SkipToMain />
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
            id='content'
            className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
        >
            <Outlet />
        </main>
    </div>
}
