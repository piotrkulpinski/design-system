import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef, isValidElement } from "react"

import { useTheme } from "../../providers"
import { type VariantProps, cx } from "../../shared"

import { proseVariants } from "./Prose.variants"

export type ProseElement = HTMLDivElement

export type ProseProps = Omit<HTMLAttributes<ProseElement>, "size"> &
  VariantProps<typeof proseVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Prose = forwardRef<ProseElement, ProseProps>((props, ref) => {
  const { className, asChild, theme: propTheme, size, ...rest } = props

  const globalTheme = useTheme()
  const theme = propTheme || globalTheme

  const useAsChild = asChild && isValidElement(rest.children)
  const Comp = useAsChild ? Slot : "div"

  return <Comp className={cx(proseVariants({ theme, size, className }))} ref={ref} {...rest} />
})

Prose.defaultProps = {
  size: "md",
  asChild: false,
}

Prose.displayName = "Prose"
