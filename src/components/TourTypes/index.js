import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import gsap, { ScrollTrigger } from 'gsap/all'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { useMedia } from 'react-media'
import theme from '../../theme'

gsap.registerPlugin(ScrollTrigger)

const TourTypes = () => {
  let headingFront = useRef(null)
  let headingBack = useRef(null)

  const isMobile = useMedia({ query: '(max-width: 375px)' })

  useEffect(() => {
    gsap.utils
      .toArray([headingFront.childNodes, headingBack.childNodes])
      .forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: headingBack,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.5,
          },
          x: index % 2 ? (isMobile ? 50 : 150) : isMobile ? -50 : -150,
        })
      })
  }, [])

  return (
    <StyledTourTypes>
      <div className="heading" ref={el => (headingBack = el)}>
        <h1 className="back">KÜLTÜR</h1>
        <h1 className="back">YURT DIŞI</h1>
        <h1 className="back">DENEYİM</h1>
        <h1 className="back">ÖZEL</h1>
      </div>
      <div className="image-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 200 }}
          speed={1}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-1.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-2.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-3.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-4.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-5.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="image"
              src="../../assets/tour-type-6.jpg"
              alt="Tur Tipi - Kültür"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="heading"
          ref={el => (headingFront = el)}
          style={{ zIndex: 1 }}
        >
          <h1 className="front">KÜLTÜR</h1>
          <h1 className="front">YURT DIŞI</h1>
          <h1 className="front">DENEYİM</h1>
          <h1 className="front">ÖZEL</h1>
        </div>
      </div>
    </StyledTourTypes>
  )
}

const StyledTourTypes = styled.div`
  display: grid;
  place-items: center;
  padding: 8.25rem 0;
  position: relative;
  overflow: hidden;

  .heading {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      margin: 0;
      font-size: 10.417vw;
      text-align: center;
      line-height: 1;

      &.front {
        color: transparent;
        -webkit-text-stroke: 2px ${theme.color.primary};
      }
    }
  }

  .image-wrapper {
    overflow: hidden;
    width: 30.208vw;

    .image {
      padding-bottom: 20%;
      border-radius: 50%;
      border: 2px solid ${theme.color.primary};
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 3.75rem 0;

    .image-wrapper {
      width: 65.104vw;
    }

    .heading {
      h1 {
        font-size: 13.021vw;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 2.5rem 0;

    .heading {
      h1 {
        font-size: 12.8vw;
      }
    }
  }
`

export default TourTypes
