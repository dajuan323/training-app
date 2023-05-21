import React from "react";
// import "./index.css";
// import { closeModal } from "./modal/modalSlice";
// import { clearCart } from "./cartSlice";
// import { useDispatch } from "react-redux";

function Modal() {
  // const dispatch = useDispatch();
  return (
    <>
      <aside className="modal-container">
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="modal">
          <h4>Remove all item from shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              cancel
            </button>
          </div>
        </div> */}
      </aside>
    </>
  );
}

export default Modal;
