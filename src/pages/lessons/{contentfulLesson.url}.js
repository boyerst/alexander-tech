import React from "react"
import { graphql } from "gatsby"
import LessonTemplate from "../../templates/lesson-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Lesson = ({ data: { contentfulLesson } }) => {
  return (
    <>
      <Seo title={contentfulLesson.title} />
      <Layout>
        <LessonTemplate {...contentfulLesson} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query lessonQuery($id: String) {
    contentfulLesson(id: { eq: $id }) {
      description {
        raw
      }
      title
      introduction
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Lesson
