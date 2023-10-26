import React, { useContext } from "react";
import InceptionContext from "../../features/context/InceptionContext";

function LevelTwo() {
  const dataStore = useContext(InceptionContext);
  console.log(dataStore.dataStore);

  return <div>Level Two</div>;
}

export default LevelTwo;
