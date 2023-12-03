import React from "react";
import { useNavigate } from "react-router";

function CallBackComponent(props) {
  const navigate = useNavigate();
  const employee = props.employee;
  const goToProfile = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    navigate(`${employee.id}`);
    props.onWorkerClick(employee, e);
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{employee.id}</p>
          <p className="card-text">{employee.name}</p>
          <p className="card-text">{employee.job}</p>
          <p className="card-text">{employee.age}</p>
          <p className="card-text">{employee.degree}</p>
          <button onClick={goToProfile} className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
}

export default CallBackComponent;
