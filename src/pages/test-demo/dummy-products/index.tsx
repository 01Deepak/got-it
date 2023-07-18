import useApiService from '@/utils/api.service'
import React from 'react'
import ProductsEndPoints from './products.endpoints'
import axios from 'axios';

const Products = (props:any) => {
  // const {products} = props;
  console.log("render");
  console.log("client props = ",props);
  
  
  return (
    <div> this is dummy Products page.</div>
  )
}

export default Products



// export async function getStaticProps() {
//   const ApiService = useApiService();

//     let reqData = {};
//     try {
//       const response:any = await ApiService.get(
//         ProductsEndPoints.allProducts(reqData)
//       );
//       const data = response.data;
//       return {
//         props: {
//           data
//         }
//       }
//     } catch (error) {
//       console.log("eeeeeeee",error);
//       return {
//         props:{
//           data: null
//         }
//       }
//     }
  
  
 

// }

//by fetch()

// export async function getStaticProps(){
//   const query = await fetch('https://dummyjson.com/products');
//   const response = await query.json();

//   return {
//     props:{
//       productsData: response
//     }
//   }
// }

// ------ by axios

export async function getStaticProps() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
}