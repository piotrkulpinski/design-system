"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { paragraphVariants } from "./Paragraph.variants"

export type ParagraphProps = Omit<HTMLAttributes<HTMLParagraphElement>, "size"> &
  VariantProps<typeof paragraphVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Paragraph = ({
  className,
  asChild,
  size = "md",
  variant = "regular",
  wrap = "wrap",
  ...rest
}: ParagraphProps) => {
  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : "p"

  return <Comp className={cx(paragraphVariants({ size, variant, wrap, className }))} {...rest} />
}
