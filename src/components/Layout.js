import React from "react"
import Navbar from "./Navbar"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <StaticImage
        className="banner"
        src="../images/banner.jpeg"
        alt="Banner"
        layout="fullWidth"
        placeholder="blurred"
        aspectRatio={16 / 5}
        // transformOptions={{fit: "cover", cropFocus: "attention"}}
      />
      <div className="content">{children}</div>
      <footer>
        <p>Website created by Dr. Tiago Prince Sales.</p>
      </footer>
    </div>
  )
}
