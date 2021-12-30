import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../theme'

import { Button } from '../ui/Button'

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo to="/">Travel</StyledLogo>
      <div className="nav-actions">
        <Button className="nav-signin-button">Oturum Aç</Button>
        <StyledMenuIcon>
          <div></div>
          <div></div>
        </StyledMenuIcon>
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;

  .nav-actions {
    display: flex;
    align-items: center;
  }

  .nav-signin-button {
    @media (max-width: ${theme.breakpoint.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    padding: 1.25rem 0;
  }
`

const StyledLogo = styled(Link)`
  font-family: ${theme.font.fontFamily.heading};
  font-size: 2rem;

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: 1.5rem;
  }
`

const StyledMenuIcon = styled.button`
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 1.5rem;

  div {
    width: 100%;
    height: 2px;
    background: ${theme.color.primary};
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    width: 60px;
    height: 30px;
  }
`

export default Navbar
