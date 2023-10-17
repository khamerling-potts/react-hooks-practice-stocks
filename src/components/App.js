import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

/*
App
  MainContainer (stocks state, portfolio state, filter and sort state for stocks to display)
    SearchBar (update filter/sort state)
    StockContainer (add to portfolio state)
      Stock
    PortfolioContainer
      Stock (delete from portfolio state)
*/
