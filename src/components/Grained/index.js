import React from 'react'
import styled from 'styled-components'

import Noise from '../../assets/noise.png'

const Grained = () => {
  return <StyledGrained />
}

const StyledGrained = styled.div`
  z-index: 999;
  position: fixed;
  content: '';
  height: 300%;
  width: 300%;
  top: -100%;
  left: -50%;
  pointer-events: none;
  user-select: none;
  background-image: url(${Noise});
  opacity: 0.6;
  animation: noise 8s steps(10) infinite;

  @keyframes noise {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`

export default Grained
