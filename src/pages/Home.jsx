import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import debug from "sabio-debug";
import HomePage from "../features/home/HomePage";
// const _logger = debug.extend("home");

function Home() {
  return (
    <>
      <HomePage />
      <footer className="container">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    </>
  );
}
export default Home;
