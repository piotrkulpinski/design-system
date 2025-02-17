import type { Meta, StoryObj } from "@storybook/react"
import { User, X } from "lucide-react"
import { Paragraph } from "~/typography/paragraph"
import { FeatureCard } from "./feature-card"

type Story = StoryObj<typeof FeatureCard>

const Card = (
  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3">
    <User />
    <Paragraph variant="medium">Need support?</Paragraph>

    <Paragraph size="sm" className="w-full opacity-60">
      Contact with one of our experts to get support.
    </Paragraph>
  </div>
)

// Meta
export default {
  title: "UI/FeatureCard",
  component: FeatureCard,
  args: {
    theme: "primary",
    variant: "soft",
    asChild: false,
    children: Card,
    style: { width: 240 },
    isCloseable: true,
  },
} satisfies Meta<typeof FeatureCard>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const AsChild = {
  args: {
    asChild: true,
    isCloseable: false,
    children: <a href="/">{Card}</a>,
  },
} satisfies Story

export const WithCustomMarkup = {
  args: {
    isCloseable: undefined,
  },

  render: props => (
    <FeatureCard.Root {...props}>
      {Card}

      <FeatureCard.Closer asChild className="text-base">
        <button type="button">
          <X />
        </button>
      </FeatureCard.Closer>
    </FeatureCard.Root>
  ),
} satisfies Story
