import React, { useState, Fragment, useRef, useEffect } from "react";
import { IToast } from "./interfaces";
import classes from "./Toast.module.scss";
import { useToastContext } from "./Toast.context";

const Toast: React.FC = () => {
  const [toasts]: any = useToastContext();

  const toastPos: any = useRef();

  return (
    <div className={classes["toast-container"]} style={toastPos.current}>
      {toasts.map((item: IToast) => {
        toastPos.current = item.pos;
        {
        }
        return (
          <Fragment>
            {item.type === "error" ? (
              <div className={classes["toast-container__toast"]} key={item.id}>
                <p className={classes["toast-container__text"]}>
                  {item.message}
                </p>
                {item ? (item.inputref ? item.inputref() : null) : null}
              </div>
            ) : (
              <div
                className={classes["toast-container__success-toast"]}
                key={item.id}
              >
                <p className={classes["toast-container__success-text"]}>
                  {item.message}
                </p>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
export default React.memo(Toast);
