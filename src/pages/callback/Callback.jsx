import React, { useState, useEffect, useCallback, useContext } from "react";
import CallBackComponent from "../../features/callbacks/CallBackComponent";
import { useNavigate, useParams } from "react-router-dom";
import CallbackProfile from "./CallbackProfile";
import InceptionContext from "../../features/context/InceptionContext";

import debug from "sabio-debug";
const _logger = debug.extend("callback");

function Callback() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const peopleArr = useContext(InceptionContext).dataStore;
  const [peopleData, setData] = useState({
    companyArr: [],
    employeeComponents: [],
  });
  useEffect(() => {
    let newArr = peopleArr;

    setData((prevState) => {
      let pd = { ...prevState };
      pd.companyArr = newArr;
      pd.employeeComponents = pd.companyArr;
      return pd;
    });
    return newArr;
  }, []);
  _logger(peopleArr);

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
  const defaultWorkerData = {
    age: `TEST`,
    degree: `TEST`,
    id: `TEST`,
    job: `TEST`,
    name: `TEST`,
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
      type: "WORKER_VIEW",
      payload: myTransportWorker,
    };
    navigate(`${friend.id}`, { state: stateForTransport });
  };
  _logger(userId);

  return userId ? (
    <CallbackProfile workerData={myTransportWorker} />
  ) : (
    <>
      <h1>Callback Practice</h1>
      <hr />
      <div className="col">
        <div className="row">
          {peopleData.employeeComponents.map(mapEmployee)}
        </div>
      </div>
    </>
  );
}

export default Callback;
