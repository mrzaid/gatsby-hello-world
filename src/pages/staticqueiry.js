import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'


const StaticQuery = ({ data }) =>
{
return(
    <Layout>

<pre>
    {JSON.stringify(data, null, 4)}
    </pre>
    </Layout>
    )
}
export const query = graphql`
  {
    site {
      siteMetadata {
        title
        name
        age
      }
    }
  }
`

export default StaticQuery

