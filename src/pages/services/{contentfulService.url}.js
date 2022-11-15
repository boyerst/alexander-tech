import React from "react"
import { graphql } from "gatsby"
import ServiceTemplate from "../../templates/product-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Service = ({ data: { contentfulProduct } }) => {
  return (
    <>
      <Seo title={contentfulProduct.title} />
      <Layout>
        <ServiceTemplate {...contentfulProduct} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query productQuery($id: String) {
    contentfulProduct(id: { eq: $id }) {
      title
      introduction
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )

      description {
        raw
      }
      
    }
  }
`

export default Service
