import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function HeroSection() {
  return (
    <div id="hero-container">
      <StaticImage
        className="hero-section-bg"
        layout="fixed"
        src="../images/hero-section-bg.png"
        layout="fullWidth"
        height={50}
        quality={95}
        alt="Image of Quinn bicycling through Glacier National Park, Washington, USA"
      />
    </div>
  )
}

export default HeroSection
