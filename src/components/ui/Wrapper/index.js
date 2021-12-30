import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'

const Wrapper = ({ innerPadding, children }) => {
  return (
    <StyledWrapper innerPadding={innerPadding}>
      <div className="wrapper-inner">{children}</div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 0 6rem;

  .wrapper-inner {
    border-left: 2px solid ${theme.color.primary};
    border-right: 2px solid ${theme.color.primary};
    padding: ${props => props.innerPadding && '0 3.438vw'};
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 0 2.375rem;

    .wrapper-inner {
      padding: ${props => props.innerPadding && '0 2.375rem'};
    }
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: 0 1.25rem;

    .wrapper-inner {
      padding: ${props => props.innerPadding && '0 1.25rem'};
    }
  }
`

export default Wrapper
