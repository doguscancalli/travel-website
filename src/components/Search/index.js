import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { FiSearch } from 'react-icons/fi'

const Search = ({ searchWidth }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <StyledSearch searchWidth={searchWidth} onSubmit={handleSubmit}>
      <input type="text" placeholder="Konum" />
      <input type="text" placeholder="Dönem" />
      <button>
        <FiSearch />
        Ara
      </button>
    </StyledSearch>
  )
}

const StyledSearch = styled.form`
  display: flex;
  width: ${props => props.searchWidth * 0.8}px;
  border: 2px solid ${theme.color.primary};

  @media (max-width: ${theme.breakpoint.tablet}) {
    width: ${props => props.searchWidth}px;
  }

  @media (max-width: ${theme.breakpoint.mobile}) {
    flex-direction: column;
  }

  input {
    width: 100%;
    padding: 1.5rem 2.5rem;
    background: none;
    border: none;
    border-right: 2px solid ${theme.color.primary};
    outline: none;
    font-size: 0.875rem;
    color: ${theme.color.primary};

    &::placeholder {
      color: ${theme.color.primary};
      opacity: 0.8;
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      padding: 1.5rem;
    }

    @media (max-width: ${theme.breakpoint.mobile}) {
      padding: 1rem;
      font-size: 0.75rem;
      border: none;
      border-bottom: 2px solid ${theme.color.primary};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2.5rem;

    svg {
      font-size: 1.25rem;
      margin-right: 1.5rem;
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      padding: 1.5rem;
      font-size: 0.875rem;
    }

    @media (max-width: ${theme.breakpoint.tablet}) {
      padding: 1rem;
      font-size: 0.75rem;

      svg {
        margin-right: 0.625rem;
        font-size: 1rem;
      }
    }
  }
`

export default Search
