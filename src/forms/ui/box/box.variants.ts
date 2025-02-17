import { cva } from "~/shared/cva"

export const boxVariants = cva({
  base: "cursor-pointer self-start w-auto select-none",
})

export const boxGroupVariants = cva({
  base: "flex flex-wrap gap-y-2 gap-x-3 w-full",

  variants: {
    boxed: {
      true: "@sm/set:grid @sm/set:grid-auto-fill-xs",
    },
  },
})
