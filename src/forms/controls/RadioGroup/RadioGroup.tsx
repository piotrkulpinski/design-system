"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { Dot } from "../../../ui/Dot"
import { radioGroupItemVariants } from "./RadioGroup.variants"

export type RadioGroupElement = ElementRef<typeof RadioGroupPrimitive.Root>
export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioGroupItemVariants>
>(({ error = false, children, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(radioGroupItemVariants({ error, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator asChild>
        <Dot className="shadow" />
      </RadioGroupPrimitive.Indicator>

      {children}
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroupRoot = ({ disabled = false, ...props }: RadioGroupProps) => (
  <RadioGroupPrimitive.Root disabled={disabled} {...props} />
)

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
})
