import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "~/layout/header"
import { Paragraph } from "~/typography/paragraph"
import { Button } from "~/ui/button"

import { Dialog } from "./dialog"

type Story = StoryObj<typeof Dialog>

// Meta
export default {
  title: "UI/Dialog",
  component: Dialog,
  args: {
    open: true,
    onOpenChange: () => {},
    children: "Dialog content",
  },
} satisfies Meta<typeof Dialog>

// Stories
export const Default = {
  args: {},
} satisfies Story

export const WithCustomMarkup = {
  render: props => (
    <Dialog {...props}>
      <Dialog.Content size="lg">
        <Dialog.Panel className="flex flex-col gap-4">
          <Header title="Confirm your action?" />

          <Paragraph className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quos?
          </Paragraph>
        </Dialog.Panel>

        <Dialog.Footer>
          <Button size="lg">Confirm</Button>
          <Dialog.Cancel />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
} satisfies Story
