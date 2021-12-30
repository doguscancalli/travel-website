import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import gsap, { ScrollTrigger } from 'gsap/all'
import theme from '../../theme'

import Tours from '../Tours'
import TourCategories from '../TourCategories'

const ToursList = () => {
  let pagination = useRef(null)

  const {
    allContentfulTours: { nodes: tours },
  } = useStaticQuery(query)

  useEffect(() => {
    const duration = 0.4
    const ease = 'expo.out'

    gsap.from(pagination, {
      duration,
      y: '100%',
      opacity: 0,
      duration,
      ease,
      scrollTrigger: pagination,
    })
  }, [])

  return (
    <StyledToursList>
      <TourCategories />
      <Tours tours={tours} />
      <StyledPagination ref={el => (pagination = el)}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </StyledPagination>
    </StyledToursList>
  )
}

const StyledToursList = styled.div``

const StyledPagination = styled.ul`
  display: flex;
  padding: 2.5rem 0;

  li {
    padding: 0.875rem 2.1875rem;
    border: 2px solid ${theme.color.primary};
    border-radius: 50%;
    margin-right: 0.5rem;

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: auto;
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 1.25rem 0;

    li {
      font-size: 0.75rem;
      padding: 0.75rem 1.75rem;
    }
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    li {
      font-size: 0.6875rem;
      padding: 0.5rem 1.3125rem;
    }
  }
`

export const query = graphql`
  {
    allContentfulTours {
      nodes {
        title
        price
        category
        image {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            resizingBehavior: FILL
          )
        }
        id
      }
    }
  }
`

export default ToursList
