import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "~/layout/header"
import { Button } from "~/ui/button"
import { Drawer } from "./drawer"

type Story = StoryObj<typeof Drawer>

// Meta
export default {
  title: "UI/Drawer",
  component: Drawer,
  args: {
    onOpenChange: () => {},
  },
  render: props => (
    <Drawer {...props}>
      <Drawer.ContentCard direction="right" size="lg">
        <Drawer.Panel sticky asChild>
          <Header title="Edit Resource">
            <Drawer.Close />
          </Header>
        </Drawer.Panel>

        <Drawer.Panel>Content</Drawer.Panel>

        <Drawer.Footer>
          <Button size="lg" className="grow">
            Save Changes
          </Button>

          <Drawer.Cancel />
        </Drawer.Footer>
      </Drawer.ContentCard>
    </Drawer>
  ),
} satisfies Meta<typeof Drawer>

// Stories
export const Default = {
  args: {},
} satisfies Story
