import {Swiper,SwiperSlide} from 'swiper/react';
import './Slider.css'
import {FreeMode} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Card from './Card';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Certi1 from '../../../src/img/certi1.jpg'
import Certi2 from '../../../src/img/certi2.jpg';
import Certi3 from '../../../src/img/certi3.jpg';
import Certi4 from '../../../src/img/certi4.jpg';
import Certi5 from '../../../src/img/certi5.jpg';
import Certi6 from '../../../src/img/certi6.jpg';

const Slider = () => {
  return (
      <div className=" container-fluid " id="certificates">
      	<div className="text-center my-3">
				<h4 className="display-5  text-orange" data-aos="fade-left">Certificates</h4>
			</div>
        <Swiper
        modules={[Navigation,FreeMode, Pagination, A11y]}
         pagination={{
          type: "progressbar",
        }}
          navigation={true}
          freeMode={true}
          grabCursor={true}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:10,
            },
            480:{
              slidesPerView:2,
              spaceBetween:10,
            },
            768:{
              slidesPerView:3,
              spaceBetween:10,
            },
            1024:{
              slidesPerView:4,
              spaceBetween:15,
            },
            1280:{
              slidesPerView:4,
              spaceBetween:30,
            },
          }}
          >
          <SwiperSlide>
            <Card
             img={Certi1}
             title="Programming for Everybody"
             link="https://www.coursera.org/account/accomplishments/verify/G8E8W4NXB3YR"
             />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             img={Certi2}
             title="Python for Data Structure"
             link="https://www.coursera.org/account/accomplishments/verify/DKKL9PCVBXYA"
             />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             img={Certi3}
             title="Python 101 for Data Science"
             link="https://courses.cognitiveclass.ai/certificates/d1681428540f4d16967d798465e07fab"
             />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             img={Certi4}
             title="Problem Solving"
             link="https://www.hackerrank.com/kamaralam?hr_r=1"
             />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             img={Certi5}
             title="AI From the Data Center"
             link="https://www.credential.net/2cde0e7f-524b-41cf-a372-690a62a7d74e?key=b29046fc814bf122ec31638d2e804dfbcb95bdd82f33a9ed14ae80bc079e826a"
             />
          </SwiperSlide>
          <SwiperSlide>
            <Card
             img={Certi6}
             title="Responsive Web Design"
             link="https://www.freecodecamp.org/certification/kamar/responsive-web-design"
             />
          </SwiperSlide>


      </Swiper>
      </div>
    );
}


export default Slider;