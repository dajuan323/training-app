import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import debug from "sabio-debug";
import HomePage from "../features/home/HomePage";
import { HomeDataProvider } from "../features/context/HomeContext";

// import HomeContext from "../features/context/HomeContext";
// const _logger = debug.extend("home");

function Home() {
  // _logger(homeData);
  return (
    <>
      <HomeDataProvider>
        <HomePage />
      </HomeDataProvider>
      <footer className="container">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    </>
  );
}
export default Home;
