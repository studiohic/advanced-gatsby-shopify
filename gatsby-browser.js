import React from "react"
import { StoreProvider } from "./src/components/context/StoreContext"
export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
