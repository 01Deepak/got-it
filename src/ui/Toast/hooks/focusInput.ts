export const focusInput = (msg: any, state: any) => {
  let msgArray = msg.replace(/[.,\s]/g, " ");
  msgArray = msgArray.toLowerCase();
  msgArray = msgArray.split(" ");
  let keyword = msgArray.filter((element: any) =>
    Object.keys(state).includes(element)
  );
  if (!keyword.length) return;
  else {
    let temp = { ...state };
    temp[keyword[0]] = true;
    return temp;
  }
};

export default focusInput;
