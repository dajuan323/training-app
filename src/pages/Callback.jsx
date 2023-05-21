import React from "react";
import { useCallback } from "react";
import { boatList } from "../data/practice";
import { useState } from "react";
import { useEffect } from "react";
import CallBackComponent from "../features/callbacks/CallBackComponent";
import { useNavigate, useParams } from "react-router-dom";
import { Row } from "reactstrap";
import CallbackProfile from "./CallbackProfile";

function Callback() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [peopleData, setData] = useState({
    companyArr: [],
    employeeComponents: [],
  });
  useEffect(() => {
    let newArr = boatList;

    setData((prevState) => {
      const pd = { ...prevState };
      pd.companyArr = newArr;
      pd.employeeComponents = pd.companyArr;
      return pd;
    });
  }, []);
  const mapEmployee = (employee) => {
    return (
      //   <CallbackProfile worker={myTransportWorker} />
      // ) : (
      <CallBackComponent
        employee={employee}
        key={`employee${employee.id}`}
        onWorkerClick={onGoProfileClick}
      />
    );
  };
  console.log(peopleData);
  const defaultWorkerData = {
    age: `Example`,
    degree: `EXAMPLE`,
    id: `on a boat`,
    job: `run`,
    name: `JohnS3`,
  };

  const [myTransportWorker, setMyTransportWorker] = useState(defaultWorkerData);
  const onGoProfileClick = useCallback((worker, e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setMyTransportWorker((prevState) => {
      return { ...prevState, ...worker };
    });
    navigateToProfile(worker);
  }, []);
  const navigateToProfile = (friend) => {
    const stateForTransport = {
      type: "FRIEND_VIEW",
      payload: myTransportWorker,
    };
    navigate(`${friend.id}`, { state: stateForTransport });
  };
  console.log(userId);
  // const callItBack =  useCallback((it)=>{
  //   console.log(it)
  // }, [])
  return userId ? (
    <CallbackProfile workerData={myTransportWorker} />
  ) : (
    <>
      <h1>Callback Practice</h1>
      <hr />
      <Row>{peopleData.employeeComponents.map(mapEmployee)}</Row>
    </>
  );
}

export default Callback;
