import React from "react";

export const CountryCard = ({ flag, name, capital, region, currencies }) => {
  return (
    <div className="card">
      <img src={flag} alt="" />
      <hr></hr>
      <p>
        Common Name: <span style={{ fontWeight: "bold" }}>{name.common}</span>{" "}
      </p>
      <p>
        Capital City:
        <span style={{ fontWeight: "bold" }}>{capital}</span>
      </p>
      <p>{region}</p>

      {Object.entries(currencies).map(([currencyCode, currencyInfo]) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>{currencyInfo.symbol}</span>
            <p>{currencyInfo.name}</p>
          </div>
        );
      })}
    </div>
  );
};
