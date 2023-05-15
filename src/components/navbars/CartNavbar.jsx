import React from "react";
import { CartIcon } from "../../features/shopping/icons";
import { useSelector } from "react-redux";
// import { store } from "../../app/store";
import "../../features/shopping/index.css";

function CartNavbar() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux E-Commerce Site</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <h2 className="total-amount">{amount}</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CartNavbar;
