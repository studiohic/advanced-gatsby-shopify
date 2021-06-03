import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import AddToCart from "../Cart/AddToCart"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Link
        to={`/product/${product.handle}`}
        style={{ display: "block", marginBottom: "2rem" }}
      >
        <GatsbyImage
          image={firstImage.localFile.childImageSharp.gatsbyImageData}
          alt={product.id}
        />
        <h3 className="title is-3">{product.title}</h3>
        <p className="subtitle is-4">${firstVariant.price}</p>
      </Link>
      <AddToCart variantId={firstVariant.shopifyId} />
    </article>
  )
}

export default ProductsListingItem
