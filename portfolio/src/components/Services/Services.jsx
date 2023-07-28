import './Services.css'
import Card from '../Card/Card';
import Glass from '../../../src/img/glasses.png'
import Heart from '../../../src/img/heartemoji.png'
import Humble from '../../../src/img/humble.png'

const Services = () => {
	return(
			<div className="container-fluid my-5 p-5 services-wrapper" id="services">
				<div className="row mt-5 pt-lg-5">
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 services-right">
						<h4 className="display-4 text-orange" data-aos="fade-left"><span className="text-dark">My</span> Services</h4>
						<p className="text-gray font-size-20" data-aos="flip-up">Full stack Developer with high level Of experience in web designing and
						development, producing the Quality work.</p>
						<p className="text-gray display-6" data-aos="flip-up">
							I bring <span className="text-orange text-decoration-underline">ideas</span> to web
						</p>
						
						<a href="https://drive.google.com/file/d/1Oh0_xGRRSXb_xN9wQERaSUFx9jvO6TZW/view?usp=drive_link" className="btn btn-orange mt-3" data-aos="fade-up">Download CV</a>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 services-right">
						<div className="services-right-desktop">
							<div style={{position:'absolute', right:'15%'}}>
								<Card title="Frontend" img={Glass} text="Bootstrap, React, Redux, Redux-ToolKit"/>
							</div>

							<div style={{position:'absolute',top:'50%'}}>
								<Card title="Backend" img={Heart} text="Python, Django, DRF Rest Framework, API Development"/>
							</div>

							<div style={{position:'absolute', top:'120%',left:'45%'}}>
								<Card title="DataBase" img={Humble} text="MySQL, MongoDB"/>
							</div>
						</div>
						{/* for mobile */}
						<div className="services-right-mobile ms-5">
						<div className="row ">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div>
									<Card title="Frontend" img={Glass} text="Bootstrap, React, Redux, Redux-ToolKit"/>
								</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5">
								<div>
									<Card title="Backend" img={Heart} text="Python, Django, DRF Rest Framework, API Development"/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div>
									<Card title="DataBase" img={Humble} text="MySQL, MongoDB"/>
								</div>
							</div>
							</div>
						</div>
						
						</div>

						{/* end */}

						<div className="blur-l"> </div>
						<div className="blur-r"> </div>
					</div>
				</div>
			</div>
		);
}

export default Services;
