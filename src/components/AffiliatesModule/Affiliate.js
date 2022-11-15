import * as React from "react"
import { AffiliateStyles } from "./AffiliatesModuleStyles"

const Affiliate = ({ children, title, content }) => {
  return (
    <AffiliateStyles>
      {children}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
    </AffiliateStyles>
  )
}

export default Affiliate
