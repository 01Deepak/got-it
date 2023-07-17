import React, { createContext, useReducer, useContext } from "react";
import { IToast } from "./interfaces";

const ToastContext = createContext({});
const initialState: Array<IToast> = [];

const ToastContextProvider = ({ reducer, children }: any) => {
  return (
    <ToastContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ToastContext.Provider>
  );
};

const useToastContext = () => useContext(ToastContext);

export { ToastContext, ToastContextProvider, useToastContext };
