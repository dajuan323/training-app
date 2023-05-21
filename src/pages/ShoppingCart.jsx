import React from "react";
import CartNavbar from "../components/navbars/CartNavbar";
import CartContainer from "../features/shopping/CartContainer";
import Modal from "../features/shopping/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/shopping/cartSlice";
import { useEffect } from "react";
import "../features/shopping/index.css";

function ShoppingCart() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <CartNavbar />
      <CartContainer />
      <hr />
    </main>
  );
}

export default ShoppingCart;
