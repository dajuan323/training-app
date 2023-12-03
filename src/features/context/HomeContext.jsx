import React, { createContext } from "react";
import homeItems from "../../data/homeCardsData";
import { useState } from "react";
import { useEffect } from "react";
import HomeCard from "../../components/cards/HomeCard";

const HomeContext = createContext();

export const HomeDataProvider = ({ children }) => {
  const [homeStore, setHomeData] = useState([]);
  useEffect(() => {
    setHomeData(homeItems);
  }, []);

  const mapItem = (item) => {
    return <HomeCard item={item} />;
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
