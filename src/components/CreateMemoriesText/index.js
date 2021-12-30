import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useDimensions from 'react-cool-dimensions'
import gsap, { ScrollTrigger } from 'gsap/all'
import theme from '../../theme'
import hexa from '../../utils/hexa'

import ImageSmall1 from '../../assets/create-memories-small-1.jpg'
import ImageSmall2 from '../../assets/create-memories-small-2.jpg'

gsap.registerPlugin(ScrollTrigger)

const CreateMemoriesText = () => {
  let headings = useRef(null)

  const { observe, height } = useDimensions()

  useEffect(() => {
    const duration = 1.2
    const ease = 'expo.out'

    gsap.from([headings.childNodes], {
      duration,
      y: '100%',
      opacity: 0,
      stagger: 0.25,
      ease,
      scrollTrigger: headings,
    })
  }, [])

  return (
    <StyledCreateMemoriesText imageSmallHeight={height}>
      <div className="background-wrapper">
        <div className="background">
          <div className="ellipse first" />
        </div>
      </div>
      <div className="headings" ref={el => (headings = el)}>
        <div className="heading">
          <div className="image">
            <img src={ImageSmall1} alt="Celsus Kütüphanesi" />
          </div>
          <h1 ref={observe}>HADİ YENİ</h1>
        </div>
        <div className="heading">
          <h1>HATIRALAR</h1>
          <div className="image">
            <img src={ImageSmall2} alt="Pamukkale" />
          </div>
        </div>
        <div className="heading">
          <h1>OLUŞTURALIM</h1>
        </div>
      </div>
    </StyledCreateMemoriesText>
  )
}

const StyledCreateMemoriesText = styled.div`
  padding: 8.25rem 0;
  display: grid;
  place-items: center;
  position: relative;

  .headings {
    .heading {
      display: flex;
      align-items: flex-start;

      .image {
        width: ${props => props.imageSmallHeight * 0.7}px;
        height: ${props => props.imageSmallHeight * 0.7}px;
        border-radius: 999px;
        overflow: hidden;
        align-self: center;

        &:nth-child(1) {
          margin-left: 3.75rem;
          margin-right: 5px;
        }

        &:nth-child(2) {
          width: 100%;
          margin-left: 5px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h1 {
        margin: 0;
        font-size: 10.417vw;
        line-height: 1;
      }

      @media (max-width: ${theme.breakpoint.mobile}) {
        &:nth-child(2) {
          h1 {
            margin-left: auto;
          }
        }

        h1 {
          font-size: 12.8vw;
        }

        .image {
          &:nth-child(1) {
            margin-left: 1.25rem;
          }

          &:nth-child(2) {
            width: ${props => props.imageSmallHeight * 0.7}px;
            margin-right: 1.25rem;
          }
        }
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 3.75rem 0;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: 2.5rem 0;
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
              ${hexa(theme.color.red, 1)} 0%,
              ${hexa(theme.color.red, 0.3)} 100%
            );
            top: -30%;
            left: 40%;
            opacity: 0.3;
          }
        }
      }
    }
  }
`

export default CreateMemoriesText
