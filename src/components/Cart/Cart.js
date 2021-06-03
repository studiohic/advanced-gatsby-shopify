import React, { useContext } from "react"
import { StoreContext } from "../../components/context/StoreContext"

const Cart = () => {
  const { isCartOpen, checkout } = useContext(StoreContext)
  console.log(checkout.lineItems)
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <h3>Cart</h3>
    </div>
  )
}

export default Cart
