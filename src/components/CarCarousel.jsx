import React from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, {Pagination, Navigation} from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';
import { Button, Typography } from '@material-tailwind/react';
import 'animate.css';


// const CarCarousel = () => {
//     return (
//       <div className="flex flex-col items-center">
//         <div className="flex justify-between items-center w-full px-10">
//           <div>
//             {/* Usando Typography de Material Tailwind para el título */}
//             <Typography variant="h1" className="text-blue-900">
//               Find Your Dream <span className="text-red-600">CAR</span>
//             </Typography>
//             {/* Usando Button de Material Tailwind para el botón "Order Now" */}
//             <Button className="mt-4" color="blue">
//               Order Now
//             </Button>
//           </div>
  
//           <div className="relative w-3/5">
//             <Swiper
//               navigation
//               pagination={{ clickable: true }}
//               loop={true}
//               className="mySwiper"
//             >
//               <SwiperSlide>
//                 <img src="../img/auto-audi.png" alt="Audi" className="animate__animated animate__fadeInRight" />
//                 <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
//                   AUDI
//                 </Typography>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="../img/auto-ferrari.png" alt="Ferrari" className="animate__animated animate__fadeInRight" />
//                 <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
//                   FERRARI
//                 </Typography>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="..img/auto-tesla.png" alt="Tesla" className="animate__animated animate__fadeInRight" />
//                 <Typography variant="h2" className="absolute text-7xl font-extrabold opacity-10 top-10 right-10 animate__animated animate__fadeInDown">
//                   TESLA
//                 </Typography>
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>
  
//         <div className="mt-10 flex space-x-8">
//           <img src="../img/logo-honda.png" alt="Honda" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
//           <img src="../img/logo-ferrari.png" alt="Ferrari" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
//           <img src="../img/logo-toyota.png" alt="Toyota" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
//           <img src="../img/logo-audi.png" alt="Audi" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
//           <img src="../img/logo-tesla.png" alt="Tesla" className="w-16 opacity-50 hover:opacity-100 transition animate__animated animate__fadeInDown" />
//         </div>
//       </div>
//     );
//   };
  

function CarCarousel() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Find Your Dream Car</h1>
          <Button color="blue" size="lg" className="mt-4">
            Order Now
          </Button>
        </div>
  
        <Swiper
          modules={[Pagination, Navigation]} // Incluir los módulos de Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation // Habilitar navegación
          pagination={{ clickable: true }} // Habilitar paginación clickeable
          className="w-full md:w-3/4 lg:w-2/3"
        >
          {/* Audi Slide */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-200 animate-slide-down">
              Audi
            </div>
            <img
              src="../img/auto-audi.png"
              alt="Audi"
              className="mx-auto animate-slide-right"
            />
          </SwiperSlide>
  
          {/* Ferrari Slide */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-200 animate-slide-down">
              Ferrari
            </div>
            <img
              src="../img/auto-ferrari.png"
              alt="Ferrari"
              className="mx-auto animate-slide-right"
            />
          </SwiperSlide>
  
          {/* Tesla Slide */}
          <SwiperSlide className="relative">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-200 animate-slide-down">
              Tesla
            </div>
            <img
              src="../img/auto-tesla.png"
              alt="Tesla"
              className="mx-auto animate-slide-right"
            />
          </SwiperSlide>
        </Swiper>
  
        <div className="mt-8 flex space-x-8">
          {/* Logos de las marcas con animación */}
          <img
            src="../img/logo-audi.png"
            alt="Audi Logo"
            className="h-16 animate-slide-down"
          />
          <img
            src="../img/logo-ferrari.png"
            alt="Ferrari Logo"
            className="h-16 animate-slide-down"
          />
          <img
            src="../img/logo-tesla.png"
            alt="Tesla Logo"
            className="h-16 animate-slide-down"
          />
          <img
            src="../img/logo-honda.png"
            alt="Honda Logo"
            className="h-16 animate-slide-down"
          />
          <img
            src="../img/logo-toyota.png"
            alt="Toyota Logo"
            className="h-16 animate-slide-down"
          />
          
        </div>
      </div>
    );
  }
  
  export default CarCarousel;
