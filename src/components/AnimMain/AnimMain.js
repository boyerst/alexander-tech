import React, { useContext } from "react"
import { motion } from "framer-motion"
import MenuContext from "../MenuContext"

const AnimMain = ({ children }) => {
  const [isOpen] = useContext(MenuContext)

  const siteBody = {
    open: {
      x: "var(--menuWidth)",
    },
    closed: {
      x: 0,
    },
  }

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={siteBody}
      transition={{ type: "ease", stiffness: 50, velocity: 50 }}
      style={{
        transition: "filter 1.5s ease",
        filter: isOpen ? "blur(25px)" : "none",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimMain
