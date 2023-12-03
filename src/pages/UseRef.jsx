import React, { useEffect } from "react";
import { useRef } from "react";

function UseRef() {
  const refObj = useRef({
    name: "Hoot",
    age: 98,
  });
  useEffect(() => {
    console.log(refObj);
  }, []);
  const addOne = () => refObj.current++;
  const cutOne = () => refObj.current--;
  return (
    <>
      <h1>UseRef</h1>
      <br />
      <h3>Ref Age: {refObj.current}</h3>
      <button>Add</button>
      <button onClick={addOne}>Add</button>
      <button onClick={cutOne}>Deduct</button>
    </>
  );
}

export default UseRef;
