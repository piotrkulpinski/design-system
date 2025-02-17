import type { Meta, StoryObj } from "@storybook/react"
import { default as StackStory } from "~/ui/stack/stack.stories"

import { Header } from "./header"

type Story = StoryObj<typeof Header>

// Meta
export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "padded",
  },
  args: {
    title: "Page title here",
    description: "Insert page description here",
    children: StackStory.args.children,
  },
} satisfies Meta<typeof Header>

// Stories
export const Default = {
  args: {},
} satisfies Story
