import * as React from "react"
import { Link, navigate } from "gatsby"
import { useScroll, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import { BannerModuleStyles, TitleStyles } from "./BannerModuleStyles"
import Button from "../Button/Button"

const BannerModule = ({ children, title, subTitle, price, enquire }) => {

  function scrollToArea() {
    navigate("#topContent")
  }

  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 900])


  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../../static/ballet.png"
            alt="Banner Image"
            layout="fullWidth"
            // layout="fixed"
            placeholder="blurred"
          />
        )}
        <div className="container">
          <TitleStyles style={{x}} className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}

            <div className="banner__btns">
              {enquire && (
                <Button
                  // className="btn"
                  text="Enquire Now"
                  as={Link}
                  to="/contact"
                />
              )}
              <Button onClick={scrollToArea} text="Learn More" />
            </div>
          </TitleStyles>
        </div>
        <div className="gradient" />
      </BannerModuleStyles>
      <span id="topContent" />
    </>
  )
}

export default BannerModule
