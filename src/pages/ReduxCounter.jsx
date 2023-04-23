import React from "react";
import Counter from "../features/counter/Counter";

function ReduxCounter() {
  return (
    <>
      <h3>Redux</h3>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Counter />
      </div>
    </>
  );
}
export default ReduxCounter;
