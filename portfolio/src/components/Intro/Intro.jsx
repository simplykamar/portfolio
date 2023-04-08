import './Intro.css';
import Navbar from '../Navbar/Navbar'
import Vector1 from '../../../src/img/Vector1.png';
import Vector2 from '../../../src/img/Vector2.png';
import Boy from '../../../src/img/boy.png'; 
import glassesimoji from '../../../src/img/glassesimoji.png'; 
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Crown from '../../../src/img/crown.png'; 
import Thumb from '../../../src/img/thumbup.png'; 
import {useEffect} from 'react';

const Intro = () => {
useEffect(() => {
window.scrollTo(0, 0)
}, [])
	return (
		<div id="intro">
			<Navbar/>
			<div className="container-fluid px-5 intro-wrapper">
			<div className="row">
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 intro-left-mobile">
					<h2 className="display-5  font-weight-bolder" data-aos="fade-right">Hey! I Am</h2>
					<h4 className="display-4  text-orange" data-aos="fade-left">Kamar Alam</h4>
					<p className="font-size-20 text-gray" data-aos="flip-up">I am a Full Stack Fresher Software Engineer from Agra, INDIA. I have a Experience of 4 web Based live Django project.</p>
					<a href = "mailto: simplykamaralam@gmail.com" className="btn btn-orange px-4 mt-5" data-aos="flip-up">Hire me</a>
					<div className="intro-icons ms-5" data-aos="zoom-in">
						<a href="https://github.com/simplykamar" target="blank"><GitHubIcon className="intro-icon"/></a>
						<a href="https://www.linkedin.com/in/kamaralam/" target="blank"><LinkedInIcon className="intro-icon mx-5 "/></a>
						<a href="#" target="blank"><InstagramIcon className="intro-icon"/></a>
					</div>
				</div>

				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 intro-left-section pt-5">
					<div className="intro-left">
						<img src={glassesimoji} className="img-fluid intro-imoji" />
						<div className="intro-card-mobile1" style={{position:'absolute',right:'0',top:'30%'}} >
							<FloatingDiv title1="Frontend" title2="Developer" img={Crown}/>
						</div>
						<div className="intro-card-mobile2" style={{position:'absolute',bottom:'-30%'}} >
							<FloatingDiv title1="Backend" title2="Developer" img={Thumb}/>
						 </div>
						<img src={Vector1} className="img-fluid intro-img1" data-aos="fade-left"/>
						<img src={Vector2} className="img-fluid intro-img2" data-aos="fade-right"/>
						<img src={Boy} className="img-fluid intro-img3"  />
						<div className="blur-1"> </div>
						<div className="blur-2"> </div>
					</div>
				</div>
			</div>
		</div>
		</div>
		);
}

export default Intro;