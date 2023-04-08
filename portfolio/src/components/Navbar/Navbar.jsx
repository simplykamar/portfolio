import './Navbar.css';
import {Link} from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const darkmode = useSelector((state)=>state);

	return (
		<div>
			<nav className="navbar p-1 navbar-expand-lg navbar-light bg-light fixed-top "
			 style={{
			 	background:darkmode?'black':'',
			 	color:darkmode?'white':''
			 }}>
			  <div className="container">
			    <a className="navbar-brand" href="#">{"{Kamar}"}</a>
			    <Toggle/>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
			        <li className="nav-item ms-4">
			          <Link spy={true} smooth={true} offset={75}  to="services" activeClass="activeClass" className="nav-link cursor-pointer">Services</Link>
			        </li>
			        <li className="nav-item ms-4">
			          <Link spy={true} smooth={true} offset={-70} to="project" activeClass="activeClass" className="nav-link cursor-pointer">Work</Link>
			        </li>
			        <li className="nav-item ms-4">
			          <Link spy={true} smooth={true} offset={-70} to="skills" activeClass="activeClass" className="nav-link cursor-pointer">Skills</Link>
			        </li>
			        <li className="nav-item ms-4">
			          <Link spy={true} smooth={true} offset={-70} to="certificates" activeClass="activeClass" className="nav-link cursor-pointer">Certificates</Link>
			        </li>
			        <li className="nav-item ms-4">
			          <Link spy={true} smooth={true} offset={-70} to="about" activeClass="activeClass" className="nav-link cursor-pointer">About me</Link>
			        </li>
			      </ul>
			      <ul className="navbar-nav">
			      <li className="nav-item"><Link spy={true} smooth={true} offset={-70} to="contact" activeClass="activeClass" className="btn px-4 btn-orange nav-link cursor-pointer" >Contact</Link></li>		     	 
			      </ul>
			    </div>
			  </div>
			</nav>
		</div>

		);
}

export default Navbar;