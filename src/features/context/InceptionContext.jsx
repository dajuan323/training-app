import React from "react";
import { boatList } from "../../data/practice";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const InceptionContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataStore, loadData] = useState([]);
  useEffect(() => {
    loadData(boatList);
  }, []);

  return (
    <InceptionContext.Provider
      value={{
        dataStore,
      }}
    >
      {children}
    </InceptionContext.Provider>
  );
};

export default InceptionContext;
