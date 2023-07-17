import { IToast } from "./../interfaces";
import * as actionTypes from "./actionTypes";

export const addToast = (data: IToast) => {
  return {
    type: actionTypes.ADD_TOAST,
    data: { ...data },
  };
};

export const addToastSuccess = (data: IToast) => {
  return {
    type: actionTypes.ADD_TOAST_SUCCESS,
    data: { ...data },
  };
};

export const removeToast = (id: number | undefined) => {
  return {
    type: actionTypes.REMOVE_TOAST,
    id,
  };
};
