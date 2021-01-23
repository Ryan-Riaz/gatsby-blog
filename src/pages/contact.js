import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/about/"> About </Link>
      <Header headerText="Contact" />
      <p>Such wow. Very React.</p>
    </div>
  )
}
