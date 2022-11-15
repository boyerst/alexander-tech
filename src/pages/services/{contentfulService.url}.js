import React from "react"
import { graphql } from "gatsby"
import ServiceTemplate from "../../templates/service-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Service = ({ data: { contentfulService } }) => {
  return (
    <>
      <Seo title={contentfulService.title} />
      <Layout>
        <ServiceTemplate {...contentfulService} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query productQuery($id: String) {
    contentfulService(id: { eq: $id }) {
      title
      introduction
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      description
    }
  }
}
`

export default Service
