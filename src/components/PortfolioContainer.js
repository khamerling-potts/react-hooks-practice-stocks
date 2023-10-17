import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onDeleteFromPortfolio }) {
  const portfolioArray = stocks.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      onDeleteFromPortfolio={onDeleteFromPortfolio}
    />
  ));
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioArray}
    </div>
  );
}

export default PortfolioContainer;
