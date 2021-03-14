import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutMeImage = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: {eq: "MeAboutMe.png"}) {
        childImageSharp {
          fluid(pngQuality: 10) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (!data?.placeholderImage?.childImageSharp?.fluid)
    return (<div>NoImage</div>)
  else
    return (<Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Its me Mohit Shrivastava" />)
}

export default AboutMeImage
