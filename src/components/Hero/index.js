import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useDimensions from 'react-cool-dimensions'
import gsap from 'gsap/all'
import { useMedia } from 'react-media'
import theme from '../../theme'
import hexa from '../../utils/hexa'

import HeroVideo from '../../assets/hero-video.mp4'

import Search from '../Search'

const Hero = () => {
  let heading = useRef(null)
  let search = useRef(null)

  const { observe, width, height } = useDimensions()

  let tl = gsap.timeline({ delay: 0.8 })

  const isMobile = useMedia({ query: '(max-width: 375px)' })

  useEffect(() => {
    const duration = 1.8
    const ease = 'expo.out'

    if (isMobile) {
      const headingFirst = heading.children[0]
      const headingFirstTextFirst = headingFirst.children[0].children[0]
      const headingFirstTextSecond = headingFirst.children[1].children[0]
      const headingSecond = heading.children[1]
      const headingSecondText = headingSecond.children[1]
      const searchForm = search.children[0]

      tl.from(headingFirstTextFirst, {
        duration,
        y: '110%',
        ease,
      })
        .from(
          headingFirstTextSecond,
          {
            duration,
            y: '110%',
            ease,
          },
          `-=${duration - 0.2}`
        )
        .from(
          headingSecondText,
          {
            duration,
            y: '110%',
            ease,
          },
          `-=${duration - 0.2}`
        )
        .from(
          searchForm,
          {
            duration,
            opacity: 0,
            ease,
          },
          `-=${duration - 0.2}`
        )
    } else {
      const headingFirst = heading.children[0]
      const headingFirstTextFirst = headingFirst.children[0].children[0]
      const headingFirstTextSecond = headingFirst.children[1].children[0]
      const headingSecond = heading.children[1]
      const headingSecondText = headingSecond.children[1]
      const headingSecondVideo = headingSecond.children[0]
      const searchForm = search.children[0]

      tl.from([headingFirstTextFirst, headingFirstTextSecond], {
        duration,
        y: '110%',
        ease,
      })
        .from(
          headingSecondText,
          {
            duration,
            y: '110%',
            ease,
          },
          `-=${duration - 0.2}`
        )
        .from(
          headingSecondVideo,
          {
            duration,
            y: '100%',
            ease,
          },
          `-=${duration - 0.2}`
        )
        .from(
          searchForm,
          {
            duration,
            opacity: 0,
            ease,
          },
          `-=${duration - 0.2}`
        )
    }
  }, [])

  return (
    <StyledHero videoHeight={height}>
      <div className="background-wrapper">
        <div className="background">
          <div className="ellipse first" />
          <div className="ellipse second" />
        </div>
      </div>
      <h1 className="hero-heading" ref={el => (heading = el)}>
        <div className="hero-heading-inner" ref={observe}>
          <div className="hero-heading-inner-line">
            <div>NEREYE</div>
          </div>
          <div className="hero-heading-inner-line">
            <div>GİTMEK</div>
          </div>
        </div>
        <div className="hero-heading-inner">
          <div className="video">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video autoPlay loop>
              <source src={HeroVideo} type="video/mp4" />
            </video>
          </div>
          <div>İSTERSİN?</div>
          <div />
        </div>
      </h1>
      <div className="search-wrapper" ref={el => (search = el)}>
        <Search searchWidth={width} />
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;

  .hero-heading {
    margin: 0;
    font-size: 8.333vw;
    line-height: 1;
    display: inline-block;
    text-align: center;
    overflow: hidden;

    &-inner {
      overflow: hidden;
      display: flex;

      &-line {
        padding-top: 0.25rem;
      }

      .video {
        border-radius: 999px;
        width: 100%;
        height: 50px;
        height: ${props => props.videoHeight}px;
        margin-right: 1.25rem;
        margin-left: 0.625rem;
        overflow: hidden;

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 80%;
        }
      }

      &-line {
        display: inline-block;
        overflow: hidden;

        &:last-child {
          margin-left: 2.083vw;
        }
      }

      &:last-child {
        display: flex;
        align-items: center;
      }
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      font-size: 9vw;
      line-height: 1.2;

      &-inner {
        .video {
          margin-right: 0.625rem;
        }
      }
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
      font-size: 16vw;
      text-align: center;
      line-height: 1;

      &-inner {
        justify-content: center;
        flex-direction: column;

        .video {
          display: none;
        }

        &:first-child {
          div {
            &:last-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  .search-wrapper {
    margin: 3.5625rem 0;
    overflow: hidden;

    @media (max-width: ${theme.breakpoint.tablet}) {
      margin-top: 2.9375rem;
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
            width: 26vw;
            height: 26vw;
            background: radial-gradient(
              circle,
              ${hexa(theme.color.green, 1)} 0%,
              ${hexa(theme.color.green, 0.4)} 100%
            );
            right: 0;
            opacity: 0.8;

            @media (max-width: ${theme.breakpoint.tablet}) {
              width: 32.55208333333333vw;
              height: 32.55208333333333vw;
            }
          }

          &.second {
            width: 46.875vw;
            height: 46.875vw;
            background: radial-gradient(
              circle,
              ${hexa(theme.color.yellow, 1)} 0%,
              ${hexa(theme.color.yellow, 0.6)} 100%
            );
            bottom: -40%;
            left: -15%;
            opacity: 0.35;

            @media (max-width: ${theme.breakpoint.tablet}) {
              width: 52vw;
              height: 52vw;
              bottom: -10%;
              left: -10%;
            }
          }
        }
      }
    }
  }
`

export default Hero
