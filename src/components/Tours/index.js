import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap, { ScrollTrigger } from 'gsap/all'
import theme from '../../theme'

import Tour from '../Tour'

gsap.registerPlugin(ScrollTrigger)

const Tours = ({ tours }) => {
  let toursComp = useRef(null)

  useEffect(() => {
    const duration = 0.8
    const ease = 'expo.out'

    gsap.from([toursComp.childNodes], {
      duration,
      y: '100%',
      opacity: 0,
      ease,
      stagger: 0.1,
      scrollTrigger: toursComp,
    })
  }, [])

  return (
    <StyledTours ref={el => (toursComp = el)}>
      {tours.map((tour, index) => {
        return <Tour tour={tour} key={tour.id} />
      })}
    </StyledTours>
  )
}

const StyledTours = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: -1px;
  margin-right: -1px;

  @media (max-width: ${theme.breakpoint.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Tours
