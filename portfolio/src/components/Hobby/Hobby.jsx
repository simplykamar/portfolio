import './Hobby.css'
import ChessImg from '../../../src/img/chess2.png'

const Hobby = () => {
	return(
		<div className="hobby-wrapper">
			<div className="container">
				<div className="row mt-5">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-3">
						<img src={ChessImg}
							style={{height:'400px'}}
						 className="img-fluid hobby-img"
						  data-aos="zoom-in-up"
						 />
					</div>

					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
					<h4 className="display-5 text-center" data-aos="fade-right" >My <span className="text-orange">Hobby</span></h4>
						<p className="font-size-20 text-gray" data-aos="flip-up">
							When I am not working or learning , I <span className="text-danger">♥</span> to spend time
							 with playing a chess. My typical weekend includes watching some Science Fiction movie.
						</p>
					</div>
				</div>
			</div>
		</div>

		);

}



export default Hobby;