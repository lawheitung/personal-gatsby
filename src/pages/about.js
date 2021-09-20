import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../style/global.scss'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Fencing from "../components/About/fencing"
import Journey from "../components/About/journey"
import Travel from "../components/About/travel/travel"
import Gameplan from "../components/About/gameplan"
import Hero from "../components/hero"
import Contact from "../components/contact"
import Navbar from "../components/Navbar"

const About = () => (
  <>
    <div className="scroll-container-main">
    <Layout>
      <Navbar/>
      <Seo title="About" />
      <div>
      <Journey />
      </div>
      <div>
      <Fencing />
      </div>
      <div>
      {/* <Travel /> */}
      </div>
      <div>
      <Gameplan/>
      </div>
      </Layout>
    </div>

  </>
)


export default About
