import { graphql, useStaticQuery } from "gatsby"

const useFeaturedService = () => {
  const {
    allContentfulService: { nodes },
  } = useStaticQuery(graphql`
    query featuredServiceLinksQuery {
      allContentfulService(
        filter: { featureThisService: { eq: true } }
        sort: { fields: url }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/services/{contentfulService.url}")
          featureThisService
          introduction
          headerImage {
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return nodes
}

export default useFeaturedService
