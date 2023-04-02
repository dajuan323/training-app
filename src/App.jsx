import React from "react";
import "./App.css";
import TopNavBar from "./components/navbars/TopNavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
