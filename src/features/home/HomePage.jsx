import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";

import debug from "sabio-debug";
const _logger = debug.extend("home-page");

function HomePage() {
  const homeDataValue = useContext(HomeContext);
  const homeStore = homeDataValue.homeStore;
  const mapHomeData = homeDataValue.mapItem;
  _logger(homeDataValue);
  _logger(homeStore);
  _logger(mapHomeData);
  return (
    <>
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Redux Training!</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">{homeStore.map(mapHomeData)}</div>
          <hr />
        </div>
      </main>
    </>
  );
}

export default HomePage;
