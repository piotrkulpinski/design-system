import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "./radio-group"

type Story = StoryObj<typeof RadioGroup>

// Meta
export default {
  title: "Form Control/RadioGroup",
  component: RadioGroup,
  args: {
    orientation: "horizontal",
    disabled: false,
    name: "radio",
    defaultValue: "1",
    className: "flex gap-2",
    children: (
      <>
        <RadioGroup.Item value="1" />
        <RadioGroup.Item value="2" />
        <RadioGroup.Item value="3" />
      </>
    ),
  },
} satisfies Meta<typeof RadioGroup>

// Stories
export const Default = {
  args: {},
} satisfies Story
