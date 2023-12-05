import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyInput } from "./components/MyInput";
import { Result } from "./components/Result";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import errorImg from "./assets/no-results.png";
import currencyImg from "./assets/icons8-currency-80.png";

function App() {
  const { isLoading, results, isError, atInitial } = useSelector((store) => {
    return store;
  });

  return (
    <>
      <MyInput />
      {/* {results.length > 0 ? <Result /> : ""}
      {isLoading ? <Loading /> : ""}
      {isError ? <img style={{ maxWidth: "200px" }} src={errorImg} /> : ""}
      */}
      {results.length > 0 ? (
        <Result />
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <img style={{ maxWidth: "200px" }} src={errorImg} />
      ) : atInitial ? (
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <p id="initialText">Enter Currency Code....</p>
          <img src={currencyImg} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
