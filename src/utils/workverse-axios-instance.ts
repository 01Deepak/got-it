import axios from "axios";
// import useToast from "../components/Toast/hooks/useToast";

/**
 * Creating empty instance of axios for network, as API urls are dynamic
 */

const useAxiosInterceptor = () => {
  // const toaster = useToast();
  const instance = axios.create({
    validateStatus: function (status: any) {
      return status >= 200;
    },
  });
  // Add a response interceptor
  instance.interceptors.request.use(function (response) {
    response.validateStatus = function (status: any) {
      return status >= 200;
    };
    return response;
  });
  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      /* As doesn't follow HTTP status codes and sometimes 
      status comes and sometimes doesn't, so using this 
      check to handle it */

      if (response.data.status && response.data.status !== 200) {
        if (response.data.status === 440) {
          localStorage.removeItem("loginData");
          localStorage.removeItem("isAuthenticated");
          // window.location.href = "/login";
          // history.push("/login");
        }
        if (response.data.status === 402) {
          window.location.href = "/settings/billing/trial_expire=true";
        }
        return Promise.reject(response.data);
      }
      return response.data;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxiosInterceptor;
