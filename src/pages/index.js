import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className="p-12 text-4xl bg-biscay-400 text-laRioja-500 ">
        Hello world!
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "gjimnazi-28-nentori-home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
