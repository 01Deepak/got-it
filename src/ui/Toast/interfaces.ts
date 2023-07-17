export interface IToast {
  message: string;
  timeout: number;
  type: string;
  id?: number;
  inputref?: Function;
  pos?: String;
}

export interface IActionToast {
  type: string;
  data: IToast;
}

export interface IActionToastRemove {
  id: number;
}
