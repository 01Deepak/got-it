import { IToast, IActionToast, IActionToastRemove } from "./../interfaces";
import * as actionTypes from "../actions/actionTypes";

const initialState: Array<IToast> = [];

const onAddToast = (state: Array<IToast>, action: IActionToast) => {
  const toasts = [...state];
  let toastIndex = toasts.findIndex((item: any) => {
    return item.message === action?.data?.message;
  });
  if (toastIndex > -1) {
    return toasts;
  } else {
    toasts.push(action.data);
    return toasts;
  }
};

const onRemoveToast = (state: Array<IToast>, action: IActionToastRemove) => {
  const filteredToasts = state.filter((item: IToast) => item.id !== action.id);
  return filteredToasts;
};

const toast = (state: Array<IToast> = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST_SUCCESS:
      return onAddToast(state, action);
    case actionTypes.REMOVE_TOAST:
      return onRemoveToast(state, action);
    default:
      return state;
  }
};

export default toast;
