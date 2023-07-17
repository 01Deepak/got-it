
import React from 'react'
import useLoaderStore from '@/stores/pageLoader.store/pageLoaderStore'
import Toast from '@/ui/Toast/Toast';
import { ToastContextProvider } from '@/ui/Toast/Toast.context';
import Header from '@/ui/header/header'
import PageLoader from '@/ui/page-loader/pageLoader';
import toastReducer from '@/ui/Toast/reducers/reducer'

const RootLayout = ({children}:any) => {
  const {isLoading}:any = useLoaderStore();

  return (
    <>
    <ToastContextProvider reducer={toastReducer}>
    {isLoading ? <PageLoader/> : null}
    <Header />
    <main>{children}</main>
    <Toast/>
    </ToastContextProvider>
    </>
  )
}

export default RootLayout