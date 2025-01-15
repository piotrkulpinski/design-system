import type { Meta, StoryObj } from "@storybook/react"

import { IconUser } from "../../icons/IconUser"

import { Button } from "./Button"

type Story = StoryObj<typeof Button>

// Meta
export default {
  title: "UI/Button",
  component: Button,
  args: {
    type: "button",
    theme: "primary",
    variant: "solid",
    size: "lg",
    asChild: false,
    disabled: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    children: <a href="/">Link Button</a>,
  },
} satisfies Story

export const WithPrefix = {
  args: {
    prefix: <IconUser />,
  },
} satisfies Story

export const WithSuffix = {
  args: {
    suffix: <IconUser />,
  },
} satisfies Story

export const WithIconOnly = {
  args: {
    prefix: <IconUser />,
    children: null,
  },
} satisfies Story
