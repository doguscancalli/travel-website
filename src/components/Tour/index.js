import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import theme from '../../theme'

const Tour = ({ tour, sprinkle }) => {
  const {
    title,
    price,
    // category,
    image: { gatsbyImageData: image },
  } = tour
  return (
    <StyledTour>
      <div className="image">
        <GatsbyImage image={image} alt={title} />
      </div>
      <ul className="content">
        <li>{title}</li>
        <li>{price}₺</li>
      </ul>
    </StyledTour>
  )
}

const StyledTour = styled.li`
  position: relative;
  border-left: 1px solid ${theme.color.primary};
  border-right: 1px solid ${theme.color.primary};

  .image {
    height: 0;
    padding: 26%;
    position: relative;
    overflow: hidden;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .content {
    border-top: 2px solid ${theme.color.primary};
    border-bottom: 2px solid ${theme.color.primary};
    display: flex;
    justify-content: space-between;

    li {
      &:first-child {
        padding: 1.25rem 2.5rem 1.25rem 1.25rem;
      }

      &:last-child {
        padding: 1.25rem 2.5rem 1.25rem 2.5rem;
        border-left: 2px solid ${theme.color.primary};
      }
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      font-size: 0.75rem;

      li {
        &:first-child {
          padding: 1rem;
        }

        &:last-child {
          padding: 1rem;
        }
      }
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
      font-size: 0.6875rem;

      li {
        &:first-child {
          padding: 1rem 0.5rem;
        }

        &:last-child {
          padding: 1rem 0.5rem;
        }
      }
    }
  }
`

export default Tour
