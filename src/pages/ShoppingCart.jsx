import React from "react";
import CartNavbar from "../components/navbars/CartNavbar";
import CartContainer from "../features/shopping/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/shopping/cartSlice";
import { useEffect } from "react";

function ShoppingCart() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <>
      <CartNavbar />
      <CartContainer />
      <hr />
    </>
  );
}

export default ShoppingCart;
