import React, { createContext } from "react";
import homeItems from "../../data/homeCardsData";
import { useState } from "react";
import { useEffect } from "react";
import HomeCard from "../../components/cards/HomeCard";

import debug from "sabio-debug";
const _logger = debug.extend("home-context");

const HomeContext = createContext();

export const HomeDataProvider = ({ children }) => {
  const [homeStore, setHomeData] = useState([]);
  useEffect(() => {
    setHomeData(homeItems);
    _logger(homeStore);
  }, []);

  const mapItem = (item) => {
    return <HomeCard key={`${item.route}HomeCard`} item={item} />;
  };
  return (
    <HomeContext.Provider
      value={{
        homeStore,
        mapItem,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
