import * as React from "react"
import IntroLine from "../intro"
import './gameplan.scss'


const Gameplan = ({ max}) =>{
	return (
	<>
		<div class="bg">
			<img class="gamebg-1" src="../../kiefer.jpeg"/>
			<img class="gamebg-2" src="../../markzuckerberg.jpeg"/>
			<img class="gamebg-3" src="../../kobe.jpeg"/>
			<img class="gamebg-4" src="../../warrenbuffet.jpeg"/>
			<img class="gamebg-5" src="../../churchill.jpeg"/>
			<div class="wrap">
			<IntroLine title="Game Plan" description="My A game that takes me through all the challenges in life" />
			<div className="content">
			<section className="qualitylist">
				<Qualities quote={'Don\'t take your shots, take lots of shots'} link={'https://www.forbes.com/sites/donyaeger/2020/01/27/keep-shooting-your-shot-a-kobe-bryant-memory-and-a-lesson-in-greatness/#7a6cb6384458'}/>
				<Qualities quote={'Be crafty and take actions'} link={'https://www.motivateamazebegreat.com/2014/05/steve-jobs-stanford-university.html'}/>
				<Qualities quote={'Trust your teammates'} link={'https://youexec.com/book-summaries/the-five-dysfunctions-of-a-team'}/>
				<Qualities quote={'Seek to understand, then to be understood'} link={'https://www.franklincovey.com/habit-5/'}/>
				<Qualities quote={'Learn everyday'} link={'https://www.coursera.org/learn/mlops-fundamentals/'}/>

                	</section>
			</div>
			</div>
			




		</div>
	</>
	)
}


export default Gameplan


const Qualities = ({ quote, link} ) => {
        return (
            <session data-sal="slide-up" className="quality-info">
                <button className="quality-links">

			<a className='quality-link' href = {link} target="_blank">{quote}</a>

		    </button>
            </session>
        )
    }
