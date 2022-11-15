import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
import useFeaturedProduct from "../../hooks/use-featured-product"
import Button from "../Button/Button"

const Features = ({ title, introduction }) => {
  const featuredProduct = useFeaturedProduct()

  return (
    <FeaturedProductsStyles className="section">
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="All Products" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features


// Used as a main container for feed underneath each separate product page
  // FeaturedProduct is used as template for each product & we pass the feature prop to the component
// Imported into product-template.js to show feed of Featured products at the bottom of each single product page