import React from "react"
import Layout from '../components/Layout'
import {graphql,useStaticQuery, StaticQuery} from 'gatsby'
export default function Home() {
  return (<Layout>
    
    
        <h1>
          Hello world!
        </h1>
        <h4>
we are children we would be available
 in  layout destructure us please 
        </h4>
    {/* <StaticQuery query={siteQuery} /> */}
    </Layout>
  )}
// const siteQuery = graphql`
// query siteQuery {
//   site {
//     siteMetadata {
//       age
//       name
//       title
//     }
//   }
// }

// `