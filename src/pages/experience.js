import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../style/global.scss'
import Work from "../components/Experience/work"
import Skills from "../components/Experience/skills"
import Projects from "../components/Experience/projects"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"

const Experience = () => (
  <>
    <div className="scroll-container-main">
    <Layout>
      <Navbar/>
      <Seo title="Experience" />
      <div>
      <Work/>
      
      </div>
      <Skills/>
      <div>
      <Projects/>
      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      </Layout>
    </div>

  </>
)


export default Experience
