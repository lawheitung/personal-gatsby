import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import './intro.scss'



const IntroLine = ( {title,description} ) =>{
	return (
	  <>
                <div class="sectionHeader">

			<div class="titlecontainer">
				<p> {title} </p>
			</div>
			<h2> {description} </h2>    
		</div>
	  </>
	)
      }
      
export default IntroLine
