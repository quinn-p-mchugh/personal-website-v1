import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Router>
        <Navbar/>
      </Router>
      <main>{children}</main>
      <footer>
        Copright © {new Date().getFullYear()} Quinn McHugh. Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby JS</a>.
      </footer>
    </div>
  )
}

export default Layout
