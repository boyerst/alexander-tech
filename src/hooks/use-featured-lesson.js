import { graphql, useStaticQuery } from "gatsby"

const useFeaturedLesson = () => {
  const {
    allContentfulLesson: { nodes },
  } = useStaticQuery(graphql`
    query featuredLessonLinksQuery {
      allContentfulLesson(
        filter: { featureThisLesson: { eq: true } }
        sort: { fields: url }
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/lessons/{contentfulLesson.url}")
          featureThisLesson
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

export default useFeaturedLesson
