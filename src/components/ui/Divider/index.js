import React from 'react'
import styled from 'styled-components'
import theme from '../../../theme'

const Divider = () => {
  return <StyledDivider />
}

const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  background: ${theme.color.primary};
`

export default Divider
