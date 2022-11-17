import * as React from "react"
import { MdArrowForward as Arrow } from "react-icons/md"
import { ButtonStyles } from "./ButtonStyles"

const Button = ({ text, to, as, arrow, onClick }) => {
  return (
    <ButtonStyles className="btn" as={as} to={to} onClick={onClick}>
      {text}
      {arrow || to ?
        <Arrow style={{ marginLeft: "10px" }} />
       : null }
    </ButtonStyles>
  )
}

export default Button
