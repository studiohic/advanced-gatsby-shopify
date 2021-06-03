import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import AddToCart from "../components/Cart/AddToCart"

const ProductDetailTemplate = ({ data }) => {
  const { shopifyProduct: product } = data
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <Layout>
      <div className="columns">
        <div className="column">
          <GatsbyImage
            image={firstImage.localFile.childImageSharp.gatsbyImageData}
          />
        </div>
        <div className="column">
          <h1 className="title">{product.title}</h1>
          <p className="subtitle price is-4">${firstVariant.price}</p>
          <p className="description">{product.description}</p>
          <AddToCart />
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetailTemplate

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      handle
      title
      description
      productType
      variants {
        id
        title
        price
        sku
        availableForSale
      }
      images {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
