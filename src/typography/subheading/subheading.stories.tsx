import type { Meta, StoryObj } from "@storybook/react"
import { Subheading } from "./subheading"

type Story = StoryObj<typeof Subheading>

// Meta
export default {
  title: "Typography/Subheading",
  component: Subheading,
  args: {
    size: "md",
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Subheading>

// Stories
export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story

export const ExtraSmall = {
  args: {
    size: "xs",
  },
} satisfies Story
