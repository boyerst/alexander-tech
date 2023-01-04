import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { FiChevronDown as Chevron } from "react-icons/fi"
import MenuContext from "../MenuContext"
import { menuItems, menuItemsAbout } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import useFeaturedLesson from "../../hooks/use-featured-lesson"
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants
} from "./NavAnim"

const NavModule = () => {
  const featuredLessons = useFeaturedLesson()

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavOneIsOpen, setSubNavOne] = useState(false)
  const [subNavTwoIsOpen, setSubNavTwo] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const toggleSubNavOne = () => {
    setSubNavOne((subNavOneIsOpen) => !subNavOneIsOpen)
  }

  const toggleSubNavTwo = () => {
    setSubNavTwo((subNavTwoIsOpen) => !subNavTwoIsOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            />
            <motion.span
              className="bar"
              variants={barTwoVariants}
            />
            <motion.span
              className="bar"
              variants={barThreeVariants}
            />
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link to="/">
                {title}
                <span>.</span>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{
          type: "ease",
          stiffness: 50,
          velocity: 50,
          delay: 0.5
        }}
        className="menu"
      >
        <NavTopLevel>
          <li>
            <Link
              onClick={toggleNav}
              onKeyDown={toggleNav}
              to="/"
              activeClassName="menu__item--active"
            >
              Home
              <span>.</span>
            </Link>
          </li>
          <li className={subNavOneIsOpen ? "open" : "closed"}>
            <button
              type="button"
              onClick={toggleSubNavOne}
              onKeyDown={toggleSubNavOne}
            >
              About<span>.</span>
              <Chevron />
            </button>
            <SubNavStyles
              initial="closed"
              animate={subNavOneIsOpen ? "open" : "closed"}
              variants={subMenuNavVariants}
            >
              {menuItemsAbout.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={toggleNav}
                      onKeyDown={toggleNav}
                      to={item.path}
                    >
                      {item.text}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </SubNavStyles>
          </li>

          {featuredLessons && (
            <li className={subNavTwoIsOpen ? "open" : "closed"}>
              <button
                type="button"
                onClick={toggleSubNavTwo}
                onKeyDown={toggleSubNavTwo}
              >
                Lessons<span>.</span>
                <Chevron />
              </button>
              <SubNavStyles
                initial="closed"
                animate={subNavTwoIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                {featuredLessons.map((item, index) => {
                  const { gatsbyPath, title } = item
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
                <hr />
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/lessons"
                  >
                    See All<span>.</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/about-lessons"
                  >
                    About Lessons<span>.</span>
                  </Link>
                </li>
              </SubNavStyles>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to={item.path}
                    activeClassName="menu__item--active"
                  >
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              ))}
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
