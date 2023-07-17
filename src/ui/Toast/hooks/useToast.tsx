import { useToastContext } from "../Toast.context";
import { IToast } from "../interfaces";
import * as actions from "../actions/actions";

const useToast = () => {
  const [, dispatch]: any = useToastContext();
  const generateRandomId = () => {
    return Math.floor(Math.random() * 10000);
  };
  return {
    addToast: (data: IToast) => {
      data.id = generateRandomId();
      dispatch(actions.addToastSuccess(data));
      setTimeout(() => dispatch(actions.removeToast(data.id)), data.timeout);
    },
  };
};

export default useToast;
