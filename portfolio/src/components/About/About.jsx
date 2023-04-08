import './About.css';
import {useSelector} from 'react-redux';

const About = () => {
  const darkmode = useSelector((state)=>state);

	return(
			<div className="container my-5" id="about">
				<div className=" about-container p-3">
					<h4 className="display-5 text-orange text-center" data-aos="fade-right">About</h4>
					<h4 className="text-gray" data-aos="fade-left">_Thanks for visiting my page! Allow me to introduce myself:</h4>
					<p className="font-size-20 text-gray text-justify" data-aos="flip-up">I’m a Computer Engineering graduate and Web Development aficionado. 
					I have significant experience in full stack development. I’ve worked on projects where I built the backend, frontend
					 and everything in between from scratch. I have also spent considerable time 
					  honing my problem solving skills. I love my work because I get to create something out of nothing. 
					 Please let me know if I can add value to your company. I’d love to 
					 discuss my projects, previous work and educational training in greater detail 
					 so you can make sure I’m capable of delivering the high standards of quality
					  you expect. Cheers :)</p>
					<p className="font-weight-bold text-black font-size-20" data-aos="fade-right">
						Find more of my works on my <a href="https://github.com/simplykamar" className="text-orange text-decoration-none">Github.</a>
					</p>
					
				</div>			
			</div>
		);

}



export default About;