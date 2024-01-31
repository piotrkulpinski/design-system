import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef, isValidElement } from "react"

import { cx, type VariantProps } from "../../shared"

import { seriesVariants } from "./Series.variants"

export type SeriesElement = HTMLDivElement

export type SeriesProps = HTMLAttributes<SeriesElement> &
  VariantProps<typeof seriesVariants> & {
    /**
     * If series to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Series = forwardRef<SeriesElement, SeriesProps>((props, ref) => {
  const { className, asChild, ...rest } = props
  const useAsChild = asChild && isValidElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(seriesVariants({ className }))} {...rest} />
})

Series.defaultProps = {
  asChild: false,
}

Series.displayName = "Series"
