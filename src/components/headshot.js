import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Headshot() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "andy-stitt-hero.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Headshot of Andy Stitt"
        style={{borderRadius: '50%'}}
      />
  )
}