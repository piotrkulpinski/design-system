import type { Meta, StoryObj } from "@storybook/react"
import { Status } from "./status"

type Story = StoryObj<typeof Status>

// Meta
export default {
  title: "UI/Status",
  component: Status,
  args: {
    theme: "gray",
    variant: "full",
  },
} satisfies Meta<typeof Status>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithTheme = {
  args: {
    theme: "red",
  },
} satisfies Story

export const WithVariant = {
  args: {
    variant: "twoThirds",
  },
} satisfies Story
