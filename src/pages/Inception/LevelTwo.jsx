import React, { useContext } from "react";
import InceptionContext from "../../features/context/InceptionContext";
// import CardComponent from "../../components/cards/CardComponent";

function LevelTwo() {
  const dataStore = useContext(InceptionContext);
  console.log(dataStore.dataStore);

  return (
    <>
      <div>Level Two</div>
      <hr />
      {/* {dataStore.datastore.map(CardComponent)} */}
    </>
  );
}

export default LevelTwo;
