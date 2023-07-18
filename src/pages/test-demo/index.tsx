import useLoaderStore from '@/stores/pageLoader.store/pageLoaderStore'
import { Button } from '@mui/material'
import React from 'react'
import useToast from '@/ui/Toast/hooks/useToast'
import { useRouter } from 'next/router'

const TestingPage = () => {
  const router = useRouter();
  const {isLoading,showLoader,hideLoader}:any = useLoaderStore();
  const toaster = useToast();

  const handleLoader = () => {
    console.log("show loader");
    showLoader();

    setTimeout(() => {
      hideLoader();
    }, 2000);
    
  }

  const successToaster = () => {
    console.log("show toaster");
    
    toaster.addToast({
      message: 'success toaster',
      timeout: 3000,
      type: "success",
    });
  }

  const errorToaster = () => {
    console.log("show toaster");
    
    toaster.addToast({
      message: 'error toaster',
      timeout: 3000,
      type: "error",
    });
  }

  return (
    <>
    <p> testing page</p>
    <Button variant="outlined" onClick={handleLoader}>showLoader</Button>
    <Button variant="outlined" onClick={successToaster}>Success toaster</Button>
    <Button variant="outlined" onClick={errorToaster}>error toaster</Button>
    <Button variant="outlined" onClick={() => router.push("/test-demo/dummy-products")}>products</Button>
    <Button variant="outlined" onClick={() => router.push("/test-demo/client-side")}>client api</Button>



    </>
  )
}

export default TestingPage
