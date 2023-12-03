import React from "react";
import "./App.css";
import TopNavBar from "./components/navbars/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ReduxCounter from "./pages/ReduxCounter";
import Callback from "./pages/callback/Callback";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import ShoppingCart from "./pages/ShoppingCart";
import Contextual from "./pages/Contextual";
import Zustand from "./pages/zustand/Zustand";
import { DataProvider } from "./features/context/InceptionContext";
import Memoized from "./pages/Memoized";
import UseRef from "./pages/UseRef";
import Portal from "./pages/Portal";
import { HomeDataProvider } from "./features/context/HomeContext";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <HomeDataProvider>
          <TopNavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="counter" element={<ReduxCounter />} />
            <Route path="shopping" element={<ShoppingCart />} />
            <Route path="callback/*" element={<Callback />}>
              <Route path=":userId/" element={<Callback />} />
            </Route>
            <Route path="contextual" element={<Contextual />} />
            <Route path="zustand" element={<Zustand />} />
            <Route path="memoized" element={<Memoized />} />
            <Route path="portal" element={<Portal />} />
            <Route path="useref" element={<UseRef />} />
          </Routes>
        </HomeDataProvider>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
