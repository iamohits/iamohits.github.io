import React from "react"
import Fade from 'react-reveal/Fade';

import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SO from "../components/so"

import { Button } from '../components/button-elements'
import { navigate } from "gatsby-link";
import Skills from "../components/skills";

// const Layout = lazy(() => import("../components/layout"));
// const About = lazy(() => import("../components/about"));
// const SEO = lazy(() => import("../components/seo"));
// const SO = lazy(() => import("../components/so"));

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fade bottom duration={100} delay={50}>
      <About />
    </Fade>

    <Skills/>

    <SO postSize={10} />
    <div style={{textAlign: `center`, padding: 20 }}>
      <Button fontBig big primary onClick={() => navigate('/stackoverflow')} >See All Posts</Button>
    </div>

  </Layout>
)

export default IndexPage
