import useLoaderStore from '@/stores/pageLoader.store/pageLoaderStore';
import useApiService from '@/utils/api.service';
import React, { useEffect, useState } from 'react'
import ClientProductsEndPoints from './clientProductsEndpoins';

const ClientsProducts = () => {
  const ApiService = useApiService();
  const {showLoader,hideLoader}:any = useLoaderStore();
  const [products,setProducts] = useState([])

  useEffect(() => {
    async function getSkills() {
      let reqData = {};
      try {
        showLoader();
        const response = await ApiService.get(
          ClientProductsEndPoints.allProducts(reqData)
        );
        if (response.status == 200) {
          hideLoader();
          console.log('client response= ',response);
          
          // setBackgroundPhoto(response.data);
        }
        hideLoader();

      } catch (error) {
        hideLoader();
      }
    }
    getSkills();
  },[])

  return (
    <>
    <h3>Clients side products data</h3>
    </>
  )
}

export default ClientsProducts