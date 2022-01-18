import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper core and required modules
import SwiperCore, { EffectCards, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// install Swiper modules
SwiperCore.use([Autoplay, EffectCards])

const HeroCarousel = () => {
  const imageClass = ""

  return (
    <div className="max-w-2xl mx-auto">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide className="border-8 border-cream">
          <StaticImage src={`../images/solar-farm-above.JPG`} alt="XXXXX" />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src={`../images/solar+wind.JPG`}
            alt="XXXXX"
            className="border-8 border-cream"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src={`../images/turbine-towards-padstow.JPG`}
            alt="XXXXX"
            className="border-8 border-cream"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src={`../images/solar-farm-2.JPG`}
            alt="XXXXX"
            className="border-8 border-cream"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            src={`../images/turbine-hill.JPG`}
            alt="XXXXX"
            className="border-8 border-cream"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroCarousel
