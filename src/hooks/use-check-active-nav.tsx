import { useLocation } from 'react-router-dom'

export default function useCheckActiveNav() {
    const { pathname } = useLocation();

    const checkActiveNav = (nav: string) => {
        if (nav === pathname && nav !== '/app') {
            return true;
        }
        const pathArray = pathname.split('/').filter((item) => item !== '');

        if (nav === '/' && pathArray.length < 1) {
            return true;
        }

        if (nav === '/app' && pathname === '/app') {
            return true;
        }
    }

    return { checkActiveNav }
}
