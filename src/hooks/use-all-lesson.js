import { graphql, useStaticQuery } from "gatsby"

const useAllLesson = () => {
  const {
    allContentfulLesson: { nodes },
  } = useStaticQuery(graphql`
    query allLessonLinksQuery {
      allContentfulLesson(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/lessons/{contentfulLesson.url}")
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

export default useAllLesson
