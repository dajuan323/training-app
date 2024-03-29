import React from "react";
import "../componentstyles.css";
import { Link } from "react-router-dom";
function TopNavBar() {
  return (
    <nav
      className="navbar navbar-expand-md public"
      aria-label="Fourth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          👑
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link px-2 text-white link-button">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"todolist"}
                className="nav-link px-2 text-white link-button"
              >
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"shopping"}
                className="nav-link px-2 text-white link-button"
              >
                Shopping Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"callback"}
                className="nav-link px-2 text-white link-button"
              >
                Callback
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"memoized"}
                className="nav-link px-2 text-white link-button"
              >
                Memoized
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"counter"}
                className="nav-link px-2 text-white link-button"
              >
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"useref"}
                className="nav-link px-2 text-white link-button"
              >
                UseRef
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <a
              href="/"
              className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
            >
              Unknow User
            </a>
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default TopNavBar;
