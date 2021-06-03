import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa"
import "../style.scss"
// import { css } from "@emotion/css"
import { StoreContext } from "../components/context/StoreContext"
import logo from "../images/logo.svg"
import Cart from "./Cart/Cart"

const Header = ({ siteTitle }) => {
  const { isCartOpen, addProductToCart, client } = useContext(StoreContext)
  return (
    <header className="navbar" style={{ background: "var(--purp)" }}>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            style={{ height: 60, maxHeight: "none", marginBottom: 0 }}
            src={logo}
            alt="Level Up Logo"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="navbar-item"
          style={{
            color: "white",
          }}
          onClick={addProductToCart}
        >
          <div>Bag</div>
          <FaShoppingCart style={{ color: "white", height: 30, width: 30 }} />
        </button>
      </div>
      <Cart />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
