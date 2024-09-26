import React from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, {Pagination, Navigation} from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';
import { Button, Typography } from '@material-tailwind/react';
import 'animate.css';

SwiperCore.use([Pagination, Navigation]);

const CarCarousel = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center w-full px-10">
          <div>
            {/* Usando Typography de Material Tailwind para el título */}
            <Typography variant="h1" className="text-blue-900">
              Find Your Dream <span className="text-red-600">CAR</span>
            </Typography>
            {/* Usando Button de Material Tailwind para el botón "Order Now" */}
            <Button className="mt-4" color="blue">
              Order Now
            </Button>
          </div>
  
          <div className="relative w-3/5">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="../img/auto-audi.png" alt="Audi" className="animate__animated animate__fadeInRight" />
                <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
                  AUDI
                </Typography>
              </SwiperSlide>
              <SwiperSlide>
                <img src="../img/auto-ferrari.png" alt="Ferrari" className="animate__animated animate__fadeInRight" />
                <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
                  FERRARI
                </Typography>
              </SwiperSlide>
              <SwiperSlide>
                <img src="..img/auto-tesla.png" alt="Tesla" className="animate__animated animate__fadeInRight" />
                <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
                  TESLA
                </Typography>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
  
        <div className="mt-10 flex space-x-8">
          <img src="../img/logo-honda.png" alt="Honda" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
          <img src="../img/logo-ferrari.png" alt="Ferrari" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
          <img src="../img/logo-toyota.png" alt="Toyota" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
          <img src="../img/logo-audi.png" alt="Audi" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
          <img src="../img/logo-tesla.png" alt="Tesla" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
        </div>
      </div>
    );
  };
  
  export default CarCarousel;
