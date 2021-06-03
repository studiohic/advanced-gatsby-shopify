import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductsListingItem from "./ProductsListingItem"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          variants {
            shopifyId
            title
            price
            availableForSale
          }
          images {
            id
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  height: 400
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`

const ProductsListing = () => {
  return (
    <div>
      <h2 className="title">Level Up Products</h2>
      <StaticQuery
        query={PRODUCTS_LISTING_QUERY}
        render={({ products }) => {
          return (
            <div className="columns is-multiline">
              {products.edges.map(({ node: product }) => (
                <ProductsListingItem key={product.id} product={product} />
              ))}
            </div>
          )
        }}
      />
    </div>
  )
}

export default ProductsListing
