import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "~/ui/button"
import { Divider } from "./divider"

type Story = StoryObj<typeof Divider>

// Meta
export default {
  title: "UI/Divider",
  component: Divider,
  args: {
    label: "or",
    style: { width: 300 },
  },
} satisfies Meta<typeof Divider>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: props => (
    <Divider {...props}>
      <Button size="sm" theme="secondary" variant="outline">
        Add workspace
      </Button>
    </Divider>
  ),
} satisfies Story
