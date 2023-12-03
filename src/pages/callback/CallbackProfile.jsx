import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "reactstrap";

import { boatList } from "../../data/practice";
import { useParams } from "react-router";
import debug from "sabio-debug";

function CallbackProfile(props) {
  const _logger = debug.extend("callback-profile");
  const worker = props.workerData;
  const userId = useParams();
  const databox = boatList;
  const worker2 = databox.filter(
    (person) => person.id === parseInt(userId.userId)
  )[0];
  console.log(worker2);
  const location = useLocation();
  const { payload, type } = location.state;
  const [profileState, setProfile] = useState(payload);
  useEffect(() => {
    if (type === "WORKER_VIEW") {
      setProfile((prevState) => {
        return {
          ...prevState,
          ...worker,
        };
      });
    }
  }, []);
  _logger(`worker ${worker.name}`);
  _logger(userId.userId);
  _logger(databox);
  _logger(`worker2 ${worker2}`);
  console.log(`worker: ${worker}`);
  console.log(`payload: ${payload.name}, type: ${type}`);
  console.log(`location: ${useLocation()}`);
  console.log(profileState);

  return (
    <>
      <Card>
        <ul>
          <li>name: {profileState.name}</li>
          <li>age: {profileState.age}</li>
          <li>id: {profileState.id}</li>
          <li>degree: {profileState.degree}</li>
          <li>job: {profileState.job}</li>
        </ul>
      </Card>
      <Card>
        <ul>
          <li>name: {worker2.name}</li>
          <li>age: {worker2.age}</li>
          <li>id: {worker2.id}</li>
          <li>degree: {worker2.degree}</li>
          <li>job: {worker2.job}</li>
        </ul>
      </Card>
    </>
  );
}

export default CallbackProfile;
