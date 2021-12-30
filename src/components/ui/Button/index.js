import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../theme'

const handleLinkWrapping = (Component, props) => {
  const { href, to, target, children, disabled, isLoading, ...rest } = props

  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      <span>{children}</span>
      {(disabled || isLoading) && <span className="loading"></span>}
      <div className="marquee" aria-hidden={true}>
        <div className="marquee__inner">
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children} </span>
        </div>
      </div>
    </Component>
  )

  if (href)
    return (
      <A
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
      >
        {button}
      </A>
    )

  if (to) return <StyledLink to={to}>{button}</StyledLink>
  return button
}

const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex: none;
`

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 22px 32px;
  margin: 0;
  position: relative;
  display: inline-block;
  font-size: 0.75rem;
  border-radius: 50%;
  border: 2px solid ${theme.color.primary};

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > span {
    display: inline-block;
    transition: opacity 0.1s;
  }

  &:hover {
    & > span {
      opacity: 0;
    }

    & .marquee__inner {
      animation-play-state: running;
      opacity: 1;
      transition-duration: 0.6s;
    }
  }

  .marquee {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    transform: rotate(-2deg);

    &__inner {
      width: fit-content;
      display: flex;
      position: relative;
      --offset: 1rem;
      --move-initial: calc(-25% + var(--offset));
      --move-final: calc(-50% + var(--offset));
      transform: translate3d(var(--move-initial), 0, 0);
      animation: marquee 1s linear infinite;
      animation-play-state: paused;
      opacity: 0;
    }

    & span {
      text-align: center;
      white-space: nowrap;
      font-style: italic;
      padding: 1.5rem 0.5rem;
    }

    @keyframes marquee {
      0% {
        transform: translate3d(var(--move-initial), 0, 0);
      }

      100% {
        transform: translate3d(var(--move-final), 0, 0);
      }
    }
  }
`

export const Button = props => handleLinkWrapping(StyledButton, props)
