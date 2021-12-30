import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import gsap, { ScrollTrigger } from 'gsap/all'
import theme from '../../theme'
import hexa from '../../utils/hexa'

gsap.registerPlugin(ScrollTrigger)

const Instagram = () => {
  let instagramText = useRef(null)

  useEffect(() => {
    const insta = instagramText.children[0]
    const gram = instagramText.children[1]
    const username = instagramText.children[2]

    gsap.to(insta, {
      scrollTrigger: {
        trigger: instagramText,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
      marginLeft: 'auto',
    })
    gsap.to(gram, {
      scrollTrigger: {
        trigger: instagramText,
        start: 'top bottom',
        end: 'center top',
        scrub: 0.5,
      },
      marginLeft: 0,
      marginRight: 'auto',
    })
    gsap.from(username, {
      scrollTrigger: {
        trigger: instagramText,
        start: 'top bottom',
        end: 'center top',
        scrub: 0.5,
      },
      scale: 0.4,
    })
  }, [])

  return (
    <StyledInstagram>
      <div className="background-wrapper">
        <div className="background">
          <div className="ellipse first" />
        </div>
      </div>
      <div className="instagram-text" ref={el => (instagramText = el)}>
        <h1>INSTA</h1>
        <h1>GRAM</h1>
        <div className="instagram-username">@travel</div>
      </div>
      <div className="instagram-posts-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          autoplay={{ delay: 2000 }}
          grabCursor
          loop
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-1.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-2.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-3.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-4.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-5.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-6.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-7.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-8.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-9.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
          <SwiperSlide className="instagram-post">
            <StaticImage
              className="image"
              src="../../assets/instagram-post-10.jpg"
              alt="Instragram Gönderisi"
              layout="fullWidth"
              placeholder="blurred"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledInstagram>
  )
}

const StyledInstagram = styled.div`
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 3.75rem 0;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: 2.5rem 0;
  }

  .instagram-text {
    position: relative;
    display: flex;
    flex-direction: column;

    h1 {
      margin: 0;
      font-size: 20.833vw;
      line-height: 1;
      display: inline-flex;

      &:nth-child(2) {
        margin-left: auto;
      }
    }

    .instagram-username {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      border: 2px solid ${theme.color.primary};
      padding: 4rem 2.75rem;
      border-radius: 50%;
      background: ${theme.color.background};
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      h1 {
        font-size: 19.53125vw;
      }

      .instagram-username {
        font-size: 1.5rem;
        padding: 2rem 1.5rem;
      }
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
      h1 {
        font-size: 26.666666666666668vw;
      }

      .instagram-username {
        font-size: 0.75rem;
        padding: 1.5rem 1.3125rem;
      }
    }
  }

  .instagram-posts-swiper {
    border-top: 2px solid ${theme.color.primary};
    border-bottom: 2px solid ${theme.color.primary};
    margin-left: -1px;
    margin-right: -1px;
    margin-top: 5rem;

    .instagram-post {
      border-left: 1px solid ${theme.color.primary};
      border-right: 1px solid ${theme.color.primary};
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      margin-top: 3.75rem;
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
      margin-top: 2.5rem;
    }
  }

  .background-wrapper {
    display: none;

    @media (max-width: ${theme.breakpoint.mobile}) {
      display: none !important;
    }

    @supports (backdrop-filter: blur(150px)) {
      display: unset;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -999;
      overflow: hidden;

      .background {
        position: relative;
        width: 100%;
        height: 100%;

        .ellipse {
          border-radius: 50%;
          position: absolute;

          &.first {
            width: 46.875vw;
            height: 46.875vw;
            background: radial-gradient(
              circle,
              ${hexa(theme.color.yellow, 1)} 0%,
              ${hexa(theme.color.yellow, 0.4)} 100%
            );
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0.4;
          }
        }
      }
    }
  }
`

export default Instagram
