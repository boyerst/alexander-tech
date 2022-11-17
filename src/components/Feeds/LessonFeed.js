import React from "react"
import FeaturedLesson from "../Lessons/FeaturedLesson"
import useAllLesson from "../../hooks/use-all-lesson"

const LessonFeed = () => {
  const allLesson = useAllLesson()

  return allLesson.map((node, index) => {
    return <FeaturedLesson key={index} feature={node} />
  })
}

export default LessonFeed
