"use client"

import { Saira_Stencil_One } from "next/font/google"
import styled from "styled-components"

interface HeaderProps {}

const sairaStencilOne = Saira_Stencil_One({ weight: ['400'], subsets: ['latin'] })

const TagHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
`

const Logotype = styled.a`
  color: var(--logo-color);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 150%;
`

export const Header = (props : HeaderProps) => {
  return (
    <TagHeader>
      <Logotype className={sairaStencilOne.className} href="/">Capputeeno</Logotype>
      <div></div>
    </TagHeader>
  )
}
