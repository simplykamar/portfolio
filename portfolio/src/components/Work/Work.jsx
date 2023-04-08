import './Work.css';
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import toast, { Toaster } from 'react-hot-toast';

const Work = () => {
  const form = useRef();
  const [done,setDone] = useState(false);
  const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_krwelvp', 'template_tvmviv9', form.current, 'uur7xz3AlOZarrOE5')
	      .then((result) => {
	          console.log(result.text);
	          setDone(true);
	          notify();
	      }, (error) => {
	          console.log(error.text);
	      });
  }
  const notify = () => toast.success('Message successfully sent.');

	return (
		<div id="contact">
		<Toaster />
		<div className="work-wrapper container-fluid px-4 mt-5">
			<div className="row">
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
					<h2 className="display-4 font-weight-bolder" data-aos="fade-right">Get in <span className="text-orange">touch</span></h2>
					<p className="text-gray font-size-20" data-aos="flip-up">If you want to know more about me or my work, or if you would just
						like to say hello, send me a message. I'd love to hear from you.
				</p>
				<div data-aos="fade-up">	
						<h4 className="fw-bold text-black">Email</h4>
						<p className="font-size-20 text-gray"><EmailIcon/> simplykamaralam@gmail.com</p>
						<h4 className="fw-bold text-black">Phone No.</h4>
						<a href="tel:9634142017" className="font-size-20 text-gray text-decoration-none text-gray"><CallIcon/> +91 9634142017</a>
					</div>	
				
				</div>	
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
						<form className="form-wrapper mt-3" data-aos="zoom-in" ref={form} onSubmit={sendEmail}>
							<input type="text" placeholder="Name" name="user_name" className=" u-input"/>
							<input type="email" placeholder="Email" name="email" className="u-input"/>
							<textarea placeholder="Message.." name="message" className="u-msg"></textarea>
							<div>
							<input type="submit" className="btn btn-orange px-5 mt-3" value="Send"/>
							</div>
						<span className="text-success"
						style={{fontSize:'18px'}}
						>{done && "Thanks for contacting me!"}</span>

						</form>
				</div>	
			</div>
		</div>
		</div>
		);
}
export default Work;