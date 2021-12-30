import React, { useEffect } from 'react'
import { gsap } from 'gsap/all'

import Grained from '../Grained'
import BackgroundBlur from '../BackgroundBlur'

const GlobalComponent = () => {
  useEffect(() => {
    // Fix flashing
    gsap.to('body', { visibility: 'visible' })
  }, [])

  return (
    <>
      <Grained />
      <BackgroundBlur />
    </>
  )
}

export default GlobalComponent
