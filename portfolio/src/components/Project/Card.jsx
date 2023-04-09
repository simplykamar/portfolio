import './Card.css'
import {useSelector} from 'react-redux';


const Card = ({title,text,link,img,isLink}) => {
  const darkmode = useSelector((state)=>state);

	return(
			<div className="mx-2" >
				<div className="card shadow proj-card"
				style={{
			 		color:darkmode?'white!important':'',
			 		background:darkmode?'#262e36':''
			 }}data-aos="zoom-in-up"

				>
				<div className="inner">
					<img src={img} className="card-img-top proj-card-img-top"/>
					</div>
					<div className="card-body">
						<h4 className="card-title text-orange">{title}</h4>
						<p className="card-text text-gray">{text}</p>
						<div className="text-right">
							{ isLink?
							<a href={link} target="blank" className="fw-bolder text-decoration-none">Click here to see</a>
							:
							<p className="fw-bolder text-decoration-line-through text-primary">Click here to see</p>
							}
					
						</div>
					</div>	
				</div>
				
			</div>
		);

}



export default Card;