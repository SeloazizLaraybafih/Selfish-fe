'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css' // Import Swiper styles

const CardsSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      //   loop={true}
      navigation={{
        // Explicitly add navigation configuration
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='text-white'
      onSlideChange={() => console.log('slide change')} // Debugging slide change
      onSwiper={(swiper) => console.log(swiper)} // Debugging swiper instance
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>

      <div className='swiper-button-next' />
      <div className='swiper-button-prev' />
    </Swiper>
  )
}

export default CardsSwiper
