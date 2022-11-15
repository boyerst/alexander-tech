import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="The Highest Standards"
          content="The American Society for the Alexander Technique (AmSAT) is the largest professional association of certified Alexander Technique teachers in the United States."
        >
          <StaticImage
            src="../../../static/logos/amsat-logo-white.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="blurred"
            // aspectRatio={3 / 1}
            // width={5000}
            // height={3000}
            // placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="<your non-profit logo here>"
          content="<your non-profit description here>"
        >
          <StaticImage
            src="../../../static/logos/non-profit-logo.jpeg"
            alt="Perk Image"
            layout="constrained"
            placeholder="blurred"
            // placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
