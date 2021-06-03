import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "studiohickie.myshopify.com",
  storefrontAccessToken: "ffb14ded96aa55aa44ba25ea9d72a439",
})
const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {},
  client,
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState({})
  useEffect(() => {
    initializeCheckout()
  }, [])
  const initializeCheckout = async () => {
    try {
      // Check if its a browser

      const isBrowser = typeof window !== "undefined"

      // Check if id exists

      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        // If id exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId)
      } else {
        // If id does not, create new checkout
        newCheckout = await client.checkout.create()
        if (isBrowser) {
          localStorage.setItem("checkout_id", newCheckout.id)
        }
      }

      // Set checkout to state
      setCheckout(newCheckout)
    } catch (e) {}
  }
  const addProductToCart = async variantId => {
    try {
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const addItems = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // If you want a 'buy it now' button
      // window.open(addItems.webUrl, "_blank")
      console.log(addItems.webUrl)
    } catch (e) {
      console.error(e)
    }
    console.log("!")
  }
  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
