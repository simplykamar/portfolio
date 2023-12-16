import './Skills.css';

const Skills = () => {
	return(
			<div className="container my-3 my-lg-5" id="skills">
				<h4 className="display-4 mb-5 text-orange text-center" data-aos="fade-right">Skills</h4>
			 		<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-0">
						<h4 className="text-black text-center" data-aos="flip-up">Frontend development</h4>
						
  						<p className="text-gray font-size-20 d-inline">React</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'90%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Redux</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'80%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">ReduxToolkit</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'70%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Material UI</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'100%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Bootstrap5</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'100%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">CSS3</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'90%',backgroundColor:'#ff7410'}}></div>
  							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 col-12">
							<h4 className="text-black text-center" data-aos="flip-up">Backend development</h4>
  						<p className="text-gray font-size-20 d-inline">Python</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'80%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Django</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'90%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Django Rest Framework</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'90%',backgroundColor:'#ff7410'}}></div>
  							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-0">
						<h4 className="text-black text-center" data-aos="flip-up">Databases</h4>
  						<p className="text-gray font-size-20 d-inline">MongoDB</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'10%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">MySQL</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'70%',backgroundColor:'#ff7410'}}></div>
  							</div>
						</div>
						{/* <div className="col-lg-6 col-md-6 col-sm-12 col-12"> */}
						{/* 	<h4 className="text-black text-center" data-aos="flip-up">Mobile development</h4> */}
  				{/* 		<p className="text-gray font-size-20 d-inline">React Native</p> */}
						{/* 	<div className="progress mb-2"> */}
    		{/* 					<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'5%',backgroundColor:'#ff7410'}}></div> */}
  				{/* 			</div> */}
						{/* </div> */}
						<div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-0">
						<h4 className="text-black text-center" data-aos="flip-up">Tools</h4>
  						<p className="text-gray font-size-20 d-inline">Postman</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'75%',backgroundColor:'#ff7410'}}></div>
  							</div>
  						<p className="text-gray font-size-20 d-inline">Git / Github</p>
							<div className="progress mb-2">
    							<div className="progress-bar progress-bar-striped progress-bar-animated " style={{width:'50%',backgroundColor:'#ff7410'}}></div>
  							</div>
						</div>
					</div>
					
			</div>
		);

}



export default Skills;