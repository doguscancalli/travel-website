import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const BackgroundBlur = () => {
  return (
    <StyledBackgroundBlur>
      <div className="wrapper">
        <div className="inner" />
      </div>
    </StyledBackgroundBlur>
  )
}

const StyledBackgroundBlur = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none !important;
  }

  @supports (backdrop-filter: blur(150px)) {
    display: unset;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -998;
    overflow: hidden;

    .wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;

      .inner {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(150px);
      }
    }
  }
`

export default BackgroundBlur
