import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filterBy, setFilterBy] = useState("None");
  const [sortBy, setSortBy] = useState("None"); //other options: name and price

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setAllStocks(data));
  }, []);

  function handleFilterChange(filter) {
    setFilterBy(filter);
  }

  function handleSortChange(sort) {
    setSortBy(sort);
  }

  function handleAddToPortfolio(addedStock) {
    if (!portfolio.includes(addedStock)) {
      setPortfolio([...portfolio, addedStock]);
    }
  }

  function handleDeleteFromPortfolio(soldStock) {
    const updatedPortfolio = portfolio.filter(
      (stock) => stock.id !== soldStock.id
    );
    setPortfolio(updatedPortfolio);
  }

  const stocksToDisplay = allStocks.filter((stock) => {
    if (filterBy === "None") return true;
    return stock.type === filterBy;
  });

  if (sortBy !== "None") {
    stocksToDisplay.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      } else if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div>
      <SearchBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        sortBy={sortBy}
        filterBy={filterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocksToDisplay}
            onAddToPortfolio={handleAddToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            onDeleteFromPortfolio={handleDeleteFromPortfolio}
            stocks={portfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
