import { gql } from 'graphql-request';

export const productsQuery = gql`
  query fetchProducts($cursor: String) {
    products(first: 250, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          description
          handle
          productType
          tags
          vendor
          createdAt
          updatedAt
          options {
            name
            values
          }
          variants(first: 100) {
            edges {
              node {
                id
                title
                sku
                price
                compareAtPrice
                inventoryQuantity
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          images(first: 25) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          metafields(first: 50) {
            edges {
              node {
                namespace
                key
                value
              }
            }
          }
          collections(first:100) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`; 