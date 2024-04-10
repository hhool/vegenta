import { MyAction } from "./actions";

const fetchData = () => {
  return { type: MyAction.FETCH };
};
const recieveData = (payload) => {
  return { type: MyAction.RECEIVE, payload: payload };
};

export const watchingDataAction = (URL) => {
  return async function (dispatch) {
    dispatch(fetchData());
    console.log(URL);
    const response = await fetch(URL);
    const res = await response.json();
    const gogoServer = response.data[1];
    console.log(gogoServer.name);
    const result = gogoServer.url;
    dispatch(recieveData(result));
  };
};
