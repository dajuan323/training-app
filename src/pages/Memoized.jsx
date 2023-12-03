import React, { useState, useMemo } from "react";
import { Button } from "reactstrap";

function Memoized() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const addIt = () => {
    setNum((prevState) => {
      return prevState + 1;
    });
  };
  const addIt2 = () => {
    setNum2((prevState) => {
      return prevState + 1;
    });
  };
  const addItBtn = (func) => {
    return (
      <Button
        onClick={func}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Add
      </Button>
    );
  };

  const result = useMemo(() => {
    return num + num2;
  }, [num]);
  return (
    <>
      <div>
        <h1>Memoized</h1>
      </div>
      <hr />
      <h4>
        Num: {num} Num2: {num2}
      </h4>
      {addItBtn(addIt)}
      {addItBtn(addIt2)}
      <h3>Result: {result}</h3>
    </>
  );
}

export default Memoized;
