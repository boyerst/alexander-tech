import * as React from "react"
import { Link } from "gatsby"
import { FeaturedLessonsStyles } from "./LessonsStyles"
import FeaturedLesson from "./FeaturedLesson"
import useFeaturedLesson from "../../hooks/use-featured-lesson"
import Button from "../Button/Button"

const Lessons = ({ title, introduction }) => {
  const featuredLesson = useFeaturedLesson()

  return (
    <FeaturedLessonsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredLesson.map((node, index) => {
          return <FeaturedLesson feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/lessons" text="See All" />
      </div>
    </FeaturedLessonsStyles>
  )
}

export default Lessons
