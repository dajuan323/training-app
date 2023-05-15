import React from "react";

function CallbackProfile(props) {
  const worker = props.worker;
  return (
    <code>
      name: {worker.name}
      age: {worker.age}
      id: {worker.id}
      degree: {worker.degree}
      job: {worker.job}
    </code>
  );
}

export default CallbackProfile;
