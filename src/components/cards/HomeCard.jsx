import React from "react";
import { Link } from "react-router-dom";

function HomeCard(props) {
  const subject = props.item;
  return (
    <div className="col-md-4">
      <h2>{subject.title}</h2>
      <p>
        <Link to={subject.route} className="btn btn-secondary">
          Go &raquo;
        </Link>
      </p>
    </div>
  );
}

export default HomeCard;
