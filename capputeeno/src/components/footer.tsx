"use client"

import styled from "styled-components"

interface FooterProps {}

const TagFooter = styled.footer`
  display: flex;
  padding: 1rem;

  @media (min-width: 1280px) {
    padding: 1rem 10rem;
  }
`

export const Footer = (props : FooterProps) => {
  return (
    <TagFooter>
      <p>&copy; 2023 T. J. Silva</p>
    </TagFooter>
  )
}
