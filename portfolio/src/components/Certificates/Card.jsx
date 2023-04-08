import './Card.css'
import {useSelector} from 'react-redux';


const Card = ({title,img,link}) => {
  const darkmode = useSelector((state)=>state);

	return(
			<div className="mx-2" >
				<div className="card shadow"
				style={{
			 		color:darkmode?'white!important':'',
			 		background:darkmode?'#262e36':''
			 }}
				>
					<img src={img} className="card-img-top certi-card-img-top"/>
					<a href={link} className="fw-bolder ms-auto text-decoration-none">See Credential</a>
				</div>
				
			</div>
		);

}



export default Card;