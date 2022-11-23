import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import Faq from "../components/Faq/Faq"
import Lessons from "../components/Lessons/Lessons"
import RichText from "../components/RichText"

const LessonTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`

// const ServiceGallery = styled.section`
//   width: 100%;

//   > .container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: calc(var(--gap) / 2);

//     @media (min-width: 1024px) {
//       gap: var(--gap);
//     }

//     > * {
//       width: calc(50% - 10px);

//       @media (min-width: 768px) {
//         width: calc(33.333% - 14px);
//       }

//       @media (min-width: 1024px) {
//         width: calc(25% - 30px);
//       }
//     }
//   }
// `

const Lessontemplate = (contentfulLesson) => {
  const {
    title,
    introduction,
    headerImage,
    description,
    faqs
  } = contentfulLesson
  const lessonHeaderImage = getImage(headerImage)
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        subTitle={introduction}
        enquire={true}
      >
        <GatsbyImage
          className="banner__image"
          image={lessonHeaderImage}
          alt={title}
        />
      </BannerModule>
      <LessonTemplateStyles className="section">
        <div className="container container__tight">
          {description && (
            <div className="column">
              <RichText richText={description} />
            </div>
          )}
          {faqs && (
            <div className="column">
              {faqs.map((item, index) => {
                return (
                  <Faq
                    key={index}
                    title={item.question}
                    description={item.answer}
                  />
                )
              })}
            </div>
          )}
        </div>
      </LessonTemplateStyles>
    {/*  {gallery && (
        <ProductGallery className="section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              let galleyImage = getImage(item)
              return <GatsbyImage key={index} image={galleyImage} />
            })}
          </div>
        </ProductGallery>
      )}*/}
      <Lessons
        title="Featured Lessons From Northwest Technique."
        introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
      />
    </>
  )
}

export default Lessontemplate
