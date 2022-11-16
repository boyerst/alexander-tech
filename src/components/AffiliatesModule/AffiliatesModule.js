import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AffiliatesModuleStyles } from "./AffiliatesModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Affiliate from "./Affiliate"

const AffiliatesModule = () => {
  return (
    <AffiliatesModuleStyles className="section section__padding">
      <StaticImage
        className="affiliates__image--bg"
        src="../../../static/dark-texture.jpeg"
        alt="Affiliates Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="affiliates__image--overlay"></div>
      <div className="container container__tight">
        <Link className="affiliates_link" to={"https://www.amsatonline.org/aws/AMSAT/pt/sp/home_page"}>
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
        </Link>
        <span className="affiliates__divider">
          <Cross />
        </span>
        <Link className="affiliates_link">
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
        </Link>
      </div>
    </AffiliatesModuleStyles>
  )
}

export default AffiliatesModule
