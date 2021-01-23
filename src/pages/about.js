import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Header headerText="About" />
      <Header headerText="Gatsby" />
      <Header headerText={2 + 2} />
      <p>Such wow. Very React.</p>
    </div>
  )
}
