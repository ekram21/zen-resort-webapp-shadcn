import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as HotToaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { TranslationProvider } from './contexts/translation-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <TranslationProvider>
                <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                    <RouterProvider router={router} />
                    <Toaster />
                    <HotToaster />
                </ThemeProvider>
            </TranslationProvider>
        </Provider>
    </React.StrictMode>
)
