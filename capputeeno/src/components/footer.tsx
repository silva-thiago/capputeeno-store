"use client"

import styled from "styled-components"

interface FooterProps {}

const TagFooter = styled.footer`
  display: flex;
  padding: 1.25rem 1.5rem;
`

export const Footer = (props : FooterProps) => {
  return (
    <TagFooter>
      <p>&copy; 2023 T. J. Silva</p>
    </TagFooter>
  )
}
