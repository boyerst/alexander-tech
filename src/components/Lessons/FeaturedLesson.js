import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import { FeaturedLessonStyles } from "./LessonsStyles"

const FeaturedLesson = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)

  return (
    <FeaturedLessonStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Product Image"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="Read More" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedLessonStyles>
  )
}

export default FeaturedLesson
