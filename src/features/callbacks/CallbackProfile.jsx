import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "reactstrap";

function CallbackProfile(props) {
  const worker = props.workerData;
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
  console.log(`worker: ${worker}`);
  console.log(`payload: ${payload.name}, type: ${type}`);
  console.log(`location: ${useLocation()}`);
  console.log(profileState);

  return (
    <Card>
      <ul>
        <li>name: {profileState.name}</li>
        <li>age: {profileState.age}</li>
        <li>id: {profileState.id}</li>
        <li>degree: {profileState.degree}</li>
        <li>job: {profileState.job}</li>
      </ul>
    </Card>
  );
}

export default CallbackProfile;
