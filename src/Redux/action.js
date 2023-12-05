import axios from "axios";
import {
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

export const getData = (inputValues) => {
  return function (dispatch, getState) {
    dispatch({
      type: GET_DATA_REQUEST,
    });

    let url = "https://restcountries.com/v3.1/currency";
    let input = inputValues.toUpperCase();

    axios
      .get(`${url}/${input}`)
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch({
          type: GET_DATA_FAIL,
        })
      );
  };
};
