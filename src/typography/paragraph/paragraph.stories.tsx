import type { Meta, StoryObj } from "@storybook/react"
import { Paragraph } from "./paragraph"

type Story = StoryObj<typeof Paragraph>

// Meta
export default {
  title: "Typography/Paragraph",
  component: Paragraph,
  args: {
    size: "md",
    variant: "regular",
    wrap: "wrap",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
} satisfies Meta<typeof Paragraph>

// Stories
export const ExtraLarge = {
  args: {
    size: "xl",
  },
} satisfies Story

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
