import React from "react";
import { Card } from "reactstrap";

const CallbackProfile = (props) => {
  const worker = props.workerData;
  return (
    <Card>
      <ul>
        <li>name: {worker.name}</li>
        <li>age: {worker.age}</li>
        <li>id: {worker.id}</li>
        <li>degree: {worker.degree}</li>
        <li>job: {worker.job}</li>
      </ul>
    </Card>
  );
};

export default CallbackProfile;
