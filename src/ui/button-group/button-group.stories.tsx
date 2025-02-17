import type { Meta, StoryObj } from "@storybook/react"
import type { ButtonGroupProps } from "./button-group"
import { ButtonGroup } from "./button-group"

type Story = StoryObj<typeof ButtonGroup>

const buttons = [
  { children: "Button 1" },
  { children: "Button 2" },
  { children: "Button 2" },
] satisfies ButtonGroupProps["buttons"]

// Meta
export default {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  args: {
    theme: "secondary",
    variant: "outline",
    buttons,
  },
} satisfies Meta<typeof ButtonGroup>

// Stories
export const Default = {
  args: {},
} satisfies Story
