"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import type { ComponentProps } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { tabsContentVariants, tabsListVariants, tabsTriggerVariants } from "./Tabs.variants"

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>

export const TabsRoot = TabsPrimitive.Root

export const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) => {
  return <TabsPrimitive.List className={cx(tabsListVariants({ className }))} {...props} />
}

export const TabsTrigger = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>) => (
  <TabsPrimitive.Trigger className={cx(tabsTriggerVariants({ className }))} {...props} />
)

export const TabsContent = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content> & VariantProps<typeof tabsContentVariants>) => (
  <TabsPrimitive.Content className={cx(tabsContentVariants({ className }))} {...props} />
)

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})
