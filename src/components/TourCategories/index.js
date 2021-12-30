import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap, { ScrollTrigger } from 'gsap/all'
import theme from '../../theme'

const TourCategories = () => {
  let categories = useRef(null)

  useEffect(() => {
    const duration = 0.8
    const ease = 'expo.out'

    gsap.from(categories, {
      duration,
      y: '100%',
      opacity: 0,
      duration,
      ease,
      scrollTrigger: categories,
    })
  }, [])

  return (
    <StyledTourCategories ref={el => (categories = el)}>
      <StyledTourCategorie className="active">
        Günübirlik (24)
      </StyledTourCategorie>
      <StyledTourCategorie>Konaklamalı (18)</StyledTourCategorie>
      <StyledTourCategorie>Yurtdışı (11)</StyledTourCategorie>
      <StyledTourCategorie>Sana Özel (8)</StyledTourCategorie>
    </StyledTourCategories>
  )
}

const StyledTourCategories = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid ${theme.color.primary};
  border-bottom: 2px solid ${theme.color.primary};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const StyledTourCategorie = styled.li`
  width: 100%;
  text-align: center;
  border-right: 1px solid ${theme.color.primary};
  border-left: 1px solid ${theme.color.primary};
  padding: 2.5rem 0;
  cursor: pointer;

  &.active {
    background: ${theme.color.primary};
    color: #ffffff;
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: 0.75rem;
    padding: 1.25rem 0;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 0.6875rem;
    padding: 1rem 0;

    &:not(:nth-last-child(-n + 2)) {
      border-bottom: 1px solid ${theme.color.primary};
    }

    &:nth-last-child(-n + 2) {
      border-top: 1px solid ${theme.color.primary};
    }

    &:nth-child(2n) {
      border-right: none;
    }
  }
`

export default TourCategories
