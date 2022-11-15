import { graphql, useStaticQuery } from "gatsby"

const useAllService = () => {
  const {
    allContentfulService: { nodes },
  } = useStaticQuery(graphql`
    query allServiceLinksQuery {
      allContentfulService(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/services/{contentfulService.url}")
          introduction
          description {
            raw
          }
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

export default useAllService
