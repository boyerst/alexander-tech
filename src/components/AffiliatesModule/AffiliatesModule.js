import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AffiliatesModuleStyles } from "./AffiliatesModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Affiliate from "./Affiliate"

const AffiliatesModule = () => {
  return (
    <AffiliatesModuleStyles className="section section__padding">
      <StaticImage
        className="affiliates__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Affiliates Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="affiliates__image--overlay"></div>
      <div className="container container__tight">
        <Affiliate
          title="The Highest Standards"
          content="The American Society for the Alexander Technique (AmSAT) is the largest professional association of certified Alexander Technique teachers in the United States."
        >
          <StaticImage
            src="../../../static/logos/amsat-logo-white.png"
            alt="Affilate Image"
            layout="constrained"
            placeholder="blurred"
            // aspectRatio={3 / 1}
            // width={5000}
            // height={3000}
            // placeholder="tracedSVG"
          />
        </Affiliate>
        <span className="affiliates__divider">
          <Cross />
        </span>
        <Affiliate
          title="<your non-profit logo here>"
          content="<your non-profit description here>"
        >
          <StaticImage
            src="../../../static/logos/non-profit-logo.jpeg"
            alt="Affilate Image"
            layout="constrained"
            placeholder="blurred"
            // placeholder="tracedSVG"
          />
        </Affiliate>
      </div>
    </AffiliatesModuleStyles>
  )
}

export default AffiliatesModule
