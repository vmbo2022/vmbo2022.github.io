import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <Link to="/" className="logo">
          VMBO 2022
        </Link>
        <nav>
          <ul>
            <li>
              <AnchorLink
                to="/#program"
                title="Program"
                className="stripped"
                stripHash
              />
            </li>

            <li>
              <AnchorLink
                to="/#dates"
                title="Important Dates"
                className="stripped"
                stripHash
              />
            </li>

            <li>
              <AnchorLink
                to="/#organization"
                title="Organization"
                className="stripped"
                stripHash
              />
            </li>

            <li>
              <AnchorLink
                to="/#previous"
                title="Previous Editions"
                className="stripped"
                stripHash
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
