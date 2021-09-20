import * as React from "react"

import {TiFeather} from 'react-icons/ti'
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



const IndexPage = () => (
  <>
  <div className="scroll-container-main">
  <Layout>
    <Navbar/>
    <Seo title="Home" />
    <div>
    <Hero max="true"/>
    </div>
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

export default IndexPage
