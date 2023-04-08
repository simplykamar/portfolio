import './Card.css'
import {useSelector} from 'react-redux';
import {Link} from 'react-scroll';


const Card = ({title,img,text}) => {
  const darkmode = useSelector((state)=>state);

	return(
			<div>
				<div className="card py-2 shadow services-card text-center" data-aos="flip-left" 
				 style={{
			 		color:darkmode?'white':'',
			 		background:darkmode?'#262e36':''
			 }}>
				
					<div className="d-flex justify-content-center">
						<img src={img} className="services-imoji"/>	
					</div>
					<div className="card-body">
						<p className="font-size-20 card-title">{title}</p>
						<p className="card-text text-gray">{text}</p>
			      <Link spy={true} smooth={true} offset={-70} to="skills" activeClass="activeClass" className="btn btn-outline-primary card-button text-capitalize cursor-pointer">see more</Link>
					</div>
				</div>
			</div>
		);
}

export default Card;
