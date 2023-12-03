import React from "react";
import { boatList } from "../../data/practice";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardComponent from "../../components/cards/CardComponent";
import debug from "sabio-debug";
const _logger = debug.extend("incept-context");

const InceptionContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataStore, loadData] = useState([]);
  useEffect(() => {
    loadData(boatList);
    _logger(dataStore);
  }, []);

  const mapItem = (item) => {
    return <CardComponent item={item} />;
  };
  return (
    <InceptionContext.Provider
      value={{
        dataStore,
        mapItem,
      }}
    >
      {children}
    </InceptionContext.Provider>
  );
};

export default InceptionContext;
