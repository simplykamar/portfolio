import './Project.css';
import Card from './Card';
import Ecommerce from '../../../src/img/ecommerce.jpg'
import JsChallenge from '../../../src/img/30DaysOfJavaScript.jpg';
import MailSystem from '../../../src/img/mail-system.jpg';
import FoodOrdering from '../../../src/img/food-ordering-system.jpg';
import BigDaddy from '../../../src/img/proj7.png';
import ToDoList from '../../../src/img/proj8.png';

const Project = () => {
	return(
			<div className="container" id="project">
				<h4 className="display-4 my-5 mt-3 text-orange text-center" data-aos="fade-right">Projects</h4>
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12 col-12">
						<Card
						 img={BigDaddy}
						 title="Restaurant App"
						 text="This App is created for Restaurant to show case there foodies online and also place order online."
						 link="https://bigdaddyforfoodies.live/"
						 isLink={true}
						 />
					</div>
					
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 my-5 my-lg-0 my-md-0">
						<Card
							 img={FoodOrdering}
							 title="Food Ordering System"
							 text="The Online Food ordering system is a process in which one can order various foods and beverages from some local restaurant and hotels through the use of internet, just by sitting at home or any place. And the order is delivered to the told location."
							 link="https://restro.pythonanywhere.com/foodie/"
						 	 isLink={true}

							 />
					</div>
					
					<div className="col-lg-4 col-md-4 col-sm-12 col-12">
						<Card
						 img={JsChallenge}
						 title="30 Days Of JavaScript"
						 text="A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects."
						 link="https://simplykamar.github.io/30DaysOfJavaScript/30DaysOfJs/home.html"
						 isLink={true}

						 />
					</div>
					
				</div>	

				<div className="row mt-5">
					
					
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 my-5 my-lg-0 my-md-0">
						<Card
						 img={MailSystem}
						 title="@mps mail System"
						 text="This Email system is created for my college (Dr. MPS Group of Institution) to provide a official online platform in college to notify student and college staff for upcoming exam, seminar or events."
						 link="https://kamarmpsmail.pythonanywhere.com/home/"
						 isLink={true}

						 />
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 my-5 my-lg-0 my-md-0">
						<Card
							 img={ToDoList}
							 title="To Do List App"
							 text="To Do List App made with React and django rest framework."
							 link="https://kamar-todo.netlify.app/"
						 	 isLink={true}

							 />
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12">
						<Card
						 img={Ecommerce}
						 title="E-commerce System"
						 text="E-commerce System is a online project that written in python framework Django. This E-commerce system provide a search product, filter item, login, signup, buy product and track product functionality."
						 link="https://alishop.pythonanywhere.com/"
						 isLink={true}

						 />
					</div>
					
				</div>			
			</div>
		);

}



export default Project;