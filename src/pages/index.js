import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"




export default ({ data }) => {
  return (
    <Layout>

      <div>
        <h1>Hi </h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }
`