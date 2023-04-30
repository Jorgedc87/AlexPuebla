import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import SwiperCore from 'swiper/core';
import Tilt from 'react-parallax-tilt';
import categorias from './data.js';
import '@styles/Gallery.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay, Pagination]);


const Gallery = () => {

    const breakpoints = {
        // Configuración para resoluciones menores a 768px
        1800: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        // Configuración para resoluciones menores a 768px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        // Configuración para resoluciones menores a 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // Configuración para resoluciones menores a 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      };

    return (
        <div className='gallery pt-[5rem] mx-auto text-center pb-[6rem]'>
            <h1 className='pt-[1rem] text-[3rem] uppercase'><span className='text-[#dbb89a]'>Galería</span> de fotos</h1>
            <div className="cards swiper-container">
                <Swiper
                    pagination={true} 
                    modules={[Pagination]} 
                    className="mySwiper"
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                    }}
                    breakpoints={breakpoints}
                >
                    {categorias.map((categoria) => (
                        <SwiperSlide
                            key={categoria.id}
                        >
                            <Tilt>
                                    <img src={categoria.imagenUrl} alt={categoria.titulo} className='card-image' />
                             </Tilt>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery
