import { cva } from "~/shared/cva"

export const paragraphVariants = cva({
  base: "",

  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm -tracking-0.5",
      md: "text-base -tracking-1",
      lg: "text-lg -tracking-1.5",
      xl: "text-xl -tracking-1.5",
    },
    variant: {
      regular: "font-normal",
      medium: "font-medium",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "regular",
  },
})
