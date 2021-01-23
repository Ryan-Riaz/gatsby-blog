import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <>
      <Link to="/contact/"> Contact </Link>
      <Link to="/about/"> About </Link>

      <h1 style={{ color: "purple" }}>Hello world!</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </>
  )
}
