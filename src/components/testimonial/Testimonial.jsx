import React from 'react'
import IMGMETest from '../../assets/m23.jpg'
import'./testtimonial.css'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      
      >
        <SwiperSlide className='testimonial'>
          <div className='cleint__avtar'>
            <img src={IMGMETest} alt="" />
          </div>
          <h5 className='client__name'>Paramjeet singh</h5>
            <small className='cleint__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='cleint__avtar'>
            <img src={IMGMETest} alt="" />
          </div>
          <h5 className='client__name'>Paramjeet singh</h5>
            <small className='cleint__review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='cleint__avtar'>
            <img src={IMGMETest} alt="" />
          </div>
          <h5 className='client__name'>Paramjeet singh</h5>
            <small className='cleint__review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='cleint__avtar'>
            <img src={IMGMETest} alt="" />
          </div>
          <h5 className='client__name'>Paramjeet singh</h5>
            <small className='cleint__review'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial