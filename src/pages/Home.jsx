import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <hr />
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Redux Training!</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Todos</h2>
              <p>
                <Link to={"todos"} className="btn btn-secondary">
                  Go &raquo;
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Shopping Cart</h2>

              <p>
                <Link to={"shopping"} className="btn btn-secondary">
                  Go &raquo;
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Callback</h2>
              <p>
                <Link to={"callback"} className="btn btn-secondary">
                  Go &raquo;
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Counter</h2>
              <p>
                <Link to={"counter"} className="btn btn-secondary">
                  Go &raquo;
                </Link>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>

      <footer className="container">
        <p>&copy; Sabio 2019-2020</p>
      </footer>
    </>
  );
}
export default Home;
