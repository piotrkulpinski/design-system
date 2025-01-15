import type { HTMLAttributes } from "react"

import { cx } from "../../shared"
import { shimmerVariants } from "./Shimmer.variants"

export type ShimmerProps = HTMLAttributes<HTMLDivElement>

export const Shimmer = ({ className, ...props }: ShimmerProps) => {
  return <div className={cx(shimmerVariants({ className }))} {...props} />
}
