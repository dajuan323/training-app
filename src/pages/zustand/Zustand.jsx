import React from "react";
import zustandStore from "./zustandStore";

function Zustand() {
  const { count, increment, decrement, reset } = zustandStore.useCounterStore();
  const { objColor, changeRed } = zustandStore.useColorChangeStore();
  return (
    <>
      <div>
        <h1>
          <span style={{ color: objColor }}>Zustand</span>
        </h1>
      </div>
      <button
        onClick={changeRed}
        style={{ backgroundColor: objColor, color: "white" }}
      >
        Change {objColor === "black" ? "Red" : "Black"}
      </button>
      <hr />
      <div>
        <h4>
          <span style={{ color: objColor }}>Count {count}</span>
        </h4>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div></div>
    </>
  );
}

export default Zustand;
