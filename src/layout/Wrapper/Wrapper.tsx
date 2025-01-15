"use client"

import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "../../shared"

import { wrapperContentVariants, wrapperVariants } from "./Wrapper.variants"

export type WrapperElement = HTMLDivElement

export type WrapperProps = HTMLAttributes<WrapperElement> & VariantProps<typeof wrapperVariants>

export const WrapperBase = forwardRef<WrapperElement, WrapperProps>(
  ({ className, ...rest }, ref) => {
    return <div ref={ref} className={cx(wrapperVariants({ className }))} {...rest} />
  },
)

export const WrapperContent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...rest }, ref) => {
    return <main ref={ref} className={cx(wrapperContentVariants({ className }))} {...rest} />
  },
)

export const Wrapper = Object.assign(WrapperBase, {
  Content: WrapperContent,
})

Wrapper.displayName = "Wrapper"
