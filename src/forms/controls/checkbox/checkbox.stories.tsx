import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./checkbox"

type Story = StoryObj<typeof Checkbox>

// Meta
export default {
  title: "Form Control/Checkbox",
  component: Checkbox,
  args: {
    error: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

// Stories
export const Default = {
  args: {},
} satisfies Story
