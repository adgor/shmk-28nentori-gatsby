import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Projekte({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className="p-12 text-4xl bg-biscay-400 text-laRioja-500 ">
        Hello world!
      </div>
      <div>
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.year} key={project.id}>
            <div>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
      nodes {
        frontmatter {
          title
          year
        }
        id
      }
    }
  }
`
