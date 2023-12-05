import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { AT_INITIAL_STAGE, GET_DATA_FAIL } from "../Redux/actionType";

export const MyInput = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!inputValue == "") {
      const debounceing = setTimeout(() => {
        dispatch(getData(inputValue));
        console.log(inputValue);
      }, 600);
      return () => clearTimeout(debounceing);
    }
    if (inputValue === "") {
      dispatch({
        type: AT_INITIAL_STAGE,
      });
    }
  }, [inputValue]);

  return (
    <>
      <div className="inputBox">
        <span className="material-symbols-outlined">search</span>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search By currency INR, EUR"
        />
      </div>
    </>
  );
};
