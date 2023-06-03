"use client"

import { Saira_Stencil_One } from "next/font/google"
import styled from "styled-components"

import { InputSearch } from "./input"

interface HeaderProps {}

const sairaStencilOne = Saira_Stencil_One({ weight: ['400'], subsets: ['latin'] })

const TagHeader = styled.header`
  align-items: center;
  background-color: var(--bg-secondary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    padding: 1rem 10rem;
  }
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
      <InputSearch />
    </TagHeader>
  )
}
