import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Projekte({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <section className="overflow-hidden text-paleSky-500">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-paleSky-100">
            {projects.map(project => (
              <div
                key={project.id}
                className="flex flex-wrap py-8 md:flex-nowrap"
              >
                <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
                  <span className="font-semibold text-paleSky-700 title-font">
                    {project.frontmatter.category}
                  </span>
                  <span className="mt-1 text-sm text-paleSky-500">
                    {project.frontmatter.year}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="mb-2 text-2xl font-medium text-paleSky-900 title-font">
                    {project.frontmatter.title}
                  </h2>
                  <Link
                    to={"/projects/" + project.frontmatter.slug}
                    className="inline-flex items-center mt-4 text-ceriseRed-500"
                  >
                    Lexo më shumë
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      sort: { fields: frontmatter___year, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          category
          year
          slug
        }
        id
      }
    }
  }
`
