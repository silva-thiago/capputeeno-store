"use client"

import { InputHTMLAttributes } from "react"
import styled from "styled-components"

import { MagnifyingGlass } from "./icons/magnifying-glass"

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 14rem;

  i svg {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 640px) {
    width: 22rem;
  }
`

const TagInput = styled.input`
  background-color: var(--fg-primary-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--text-primary-color);
  font-family: inherit;
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: var(--line-height-xs);
  padding: 0.5rem 0.75rem;
  min-width: 100%;

  @media (min-width: 640px) {
    font-size: inherit;
    line-height: inherit;
  }
`

export const InputSearch = (props: InputSearchProps) => {
  return (
    <InputWrapper>
      <TagInput {...props} placeholder="Procurando por algo específico?" />
      <MagnifyingGlass />
    </InputWrapper>
  )
}