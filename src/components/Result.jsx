import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CountryCard } from "./CountryCard";

export const Result = () => {
  const results = useSelector((store) => {
    return store.results;
  });

  return (
    <div className="result_container">
      {results?.map((e, i) => {
        return (
          <CountryCard
            name={e.name}
            capital={e.capital}
            region={e.region}
            currencies={e.currencies}
            flag={e.flags.png}
          />
        );
      })}
    </div>
  );
};
