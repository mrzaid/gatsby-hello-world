import React from "react"
import Layout from '../components/Layout'
import {graphql,StaticQuery} from 'gatsby'
export default function Home() {
  return (
    <Layout>
      <h1>
          Hello world!
        </h1>
        <h4>
we are children we would be available
 in  layout destructure us please 
        </h4>
    {/* <StaticQuery query={siteQuery} 
    render={data=>data.site.siteMetadata.map(data=>(
<ul> 
       <li>
        {data.age}
      </li>
      <li>
        {data.name}
      </li>
      <li>
        {data.title}
      </li>
      </ul>

    )
     
    )
    }
    
    /> */}
    </Layout>
  )}
const siteQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      name
      age
      title
    }
  }
}

`