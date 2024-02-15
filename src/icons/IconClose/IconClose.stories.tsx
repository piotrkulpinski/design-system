import type { Meta, StoryObj } from "@storybook/react"

import { IconClose } from "./IconClose"

type Story = StoryObj<typeof IconClose>

// Meta
export default {
  title: "Icons/Close",
  component: IconClose,
} satisfies Meta

// Stories
export const Default = {
  args: {},
} satisfies Story
