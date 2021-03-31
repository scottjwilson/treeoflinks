import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Profile from "../components/Profile"
import Links from "../components/Links"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { allContentfulLink, contentfulPerson } = data
  return (
    <Layout>
      <SEO title="Welcome" />
      <section className="h-screen hero flex items-center justify-center">
        <article className="bg-indigo-800 rounded-xl shadow-xl">
          <Profile data={contentfulPerson} />
          <Links data={allContentfulLink} />/
        </article>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    contentfulPerson(name: { eq: "Your Business" }) {
      id
      name
      twitter
      image {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    allContentfulLink {
      nodes {
        text
        url
      }
    }
  }
`

export default IndexPage
