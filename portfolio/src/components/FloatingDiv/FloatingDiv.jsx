import './FloatingDiv.css';
import Boy from '../../../src/img/boy.png'; 
import {useSelector} from 'react-redux';


const FloatingDiv = ({title1,title2,img}) => {
  const darkmode = useSelector((state)=>state);

	return (
		<div>
			 <div className="card floating-card" style={{
			 	color:darkmode?'black':''
			 }}>
			 	<div className="p-1 d-flex justify-content-center align-items-center">
			 			<img src={img} className="img-fluid floating-img"/>
			 	 		<div className="card-title text-black">
							{title1} <small style={{fontSize:'16px',fontWeight:'bold'}} className="text-gray">{title2}</small>
				 		</div>
			 	</div>

			 </div>
		</div>

		);
}

export default FloatingDiv;