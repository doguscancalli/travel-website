import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

import links from '../../data/links'

const Footer = () => {
  return (
    <StyledFooter>
      <ul className="social">
        <li>
          <h3>SOSYAL</h3>
        </li>
        <li>
          <Link to="/">Instagram</Link>
        </li>
        <li>
          <Link to="/">Twitter</Link>
        </li>
        <li>
          <Link to="/">Facebook</Link>
        </li>
        <li>
          <Link to="/">Youtube</Link>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <h3>MENÜ</h3>
        </li>
        {links.map(link => (
          <li key={link.title}>
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <ul className="info">
        <li>
          <Link className="logo" to="/">
            Travel
          </Link>
        </li>
        <li>
          <p className="credit">
            Made with ❤️ by{' '}
            <a href="https://dogus.design" target="_blank" rel="noreferrer">
              dogus.design
            </a>
          </p>
        </li>
      </ul>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;

  .social,
  .nav {
    li:first-child {
      margin-bottom: 1.25rem;

      h3 {
        font-size: 1.125rem;
      }
    }

    li:not(:first-child) {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
      font-size: 2.5rem;
    }

    .credit {
      font-size: 0.75rem;

      a {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    .social,
    .nav {
      li:first-child {
        margin-bottom: 0.75rem;

        h3 {
          font-size: 0.75rem;
        }
      }

      li:not(:first-child) {
        font-size: 1.125rem;
      }
    }

    .info {
      .logo {
        font-size: 1.5rem;
      }

      .credit {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 1.25rem;

    .social,
    .nav {
      li:first-child {
        margin-bottom: 0.5rem;

        h3 {
          font-size: 0.6875rem;
        }
      }

      li:not(:first-child) {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
      }
    }

    .nav {
      margin-left: auto;
    }

    .info {
      margin-top: 1.875rem;
      text-align: center;
      grid-area: 2 / 1 / 3 / 3;

      .logo {
        font-size: 1.125rem;
      }

      .credit {
        font-size: 0.375rem;
      }
    }
  }
`

export default Footer
