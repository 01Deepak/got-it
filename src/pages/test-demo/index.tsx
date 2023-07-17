import useLoaderStore from '@/stores/pageLoader.store/pageLoaderStore'
import { Button } from '@mui/material'
import React from 'react'
import useToast from '@/ui/Toast/hooks/useToast'

const TestingPage = () => {
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


    </>
  )
}

export default TestingPage