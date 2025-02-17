"use client"

import type { InputHTMLAttributes, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { getElementWidth } from "~/shared/helpers"
import { createSimpleContext } from "~/shared/providers"
import { Affixable } from "~/utils/affixable/affixable"
import { affixGroupVariants, affixVariants } from "./affix.variants"

export type AffixContext = {
  prefixWidth?: number
  suffixWidth?: number
}

const AffixContext = createSimpleContext<AffixContext>("Affix")

export type AffixProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> &
  VariantProps<typeof affixGroupVariants> &
  VariantProps<typeof affixVariants> & {
    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

const Affix = ({ children, className, prefix, suffix, ...props }: AffixProps) => {
  const [prefixWidth, setPrefixWidth] = useState<number>()
  const [suffixWidth, setSuffixWidth] = useState<number>()
  const prefixRef = useRef<HTMLElement>(null)
  const suffixRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setPrefixWidth(getElementWidth(prefixRef.current, true))
    setSuffixWidth(getElementWidth(suffixRef.current, true))
  }, [])

  if (!prefix && !suffix) {
    return <>{children}</>
  }

  return (
    <AffixContext.Provider value={{ prefixWidth, suffixWidth }}>
      <div className={cx(affixGroupVariants({ className }))} {...props}>
        <Affixable variants={affixVariants}>{prefix}</Affixable>

        {children}

        <Affixable variants={affixVariants}>{suffix}</Affixable>
      </div>
    </AffixContext.Provider>
  )
}

const useAffix = AffixContext.useValue

export { Affix, useAffix }
