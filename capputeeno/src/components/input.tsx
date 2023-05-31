"use client"

import { InputHTMLAttributes } from "react"
import styled from "styled-components"

import { MagnifyingGlass } from "./icons/magnifying-glass"

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 18rem;

  i svg {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }
`

const TagInput = styled.input`
  background-color: var(--fg-primary-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--text-primary-color);
  font-family: inherit;
  font-size: 0.875em;
  font-weight: 400;
  line-height: 1.375rem;
  padding: 0.5rem 1rem;
  min-width: 100%;
`

export const InputSearch = (props: InputSearchProps) => {
  return (
    <InputWrapper>
      <TagInput {...props} placeholder="Procurando por algo específico?" />
      <MagnifyingGlass />
    </InputWrapper>
  )
}