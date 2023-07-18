import useAxiosInterceptor from "./workverse-axios-instance";
interface IDataObject {
  url: string;
  data: object;
  headers?: object;
  API_BASE_URL?: string;
  API_BASE_URL_DOMAIN_ML?:string
}
const useApiService = () => {
  let API_BASE_URL: any = process.env.NEXT_PUBLIC_API_STAGE_URL;
  let API_BASE_URL_DOMAIN_ML:any = process.env.NEXT_PUBLIC_API_STAGE_URL_ML
  let  API_BASE_URL_DOMAIN = process.env.REACT_APP_API_URL_DOMAIN;

  const axiosInstance = useAxiosInterceptor();
  return {
    get(obj: IDataObject) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      return axiosInstance.get(API_BASE_URL + obj.url, {
        params: {
          ...obj.data,
        },
        headers: { ...obj.headers },
      });
    },
    post(obj: any) {
      let baseUrl = API_BASE_URL
      if(obj.server == "ML")
      baseUrl = API_BASE_URL_DOMAIN_ML
  
      return axiosInstance.post(
        baseUrl + obj.url,
        {
          ...obj.data,
        },
        { headers: { ...obj.headers } }
      );
    },
    put(obj: IDataObject) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      return axiosInstance.put(
        API_BASE_URL + obj.url,
        {
          ...obj.data,
        },
        { headers: { ...obj.headers } }
      );
    },
    delete(obj: IDataObject) {
      if (obj.API_BASE_URL) {
        API_BASE_URL = obj.API_BASE_URL;
      }
      return axiosInstance.delete(API_BASE_URL + obj.url, {
        headers: { ...obj.headers },
        data: {
          ...obj.data,
        },
      });
    },
    getDomain(obj: IDataObject) {
      return axiosInstance.get(API_BASE_URL + obj.url, {
        params: {
          ...obj.data,
        },
      });
    },
    postDomain(obj: IDataObject) {
      return axiosInstance.post(API_BASE_URL + obj.url, {
        ...obj.data,
      });
    },
    postFormData(obj: IDataObject) {
      return axiosInstance.post(API_BASE_URL + obj.url, obj.data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    putFormData(obj: IDataObject) {
      return axiosInstance.put(API_BASE_URL + obj.url, obj.data, {
        headers: { "Content-Type": "multipart/form-data", ...obj.headers },
      });
    },
  };
};

export default useApiService;
