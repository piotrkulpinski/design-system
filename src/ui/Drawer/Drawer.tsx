import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { IconX } from "@tabler/icons-react"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Backdrop } from "../Backdrop"
import { Button } from "../Button"
import { Card } from "../Card"

import { drawerVariants } from "./Drawer.variants"

export type DrawerElement = ElementRef<typeof DrawerPrimitive.Root>
export type DrawerProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>

const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & VariantProps<typeof drawerVariants>
>(({ className, size, direction, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay asChild>
      <Backdrop />
    </DrawerPrimitive.Overlay>

    <DrawerPrimitive.Content
      ref={ref}
      className={cx(drawerVariants({ size, direction, className }))}
      {...props}
    />
  </DrawerPrimitive.Portal>
))

const DrawerContentCard = forwardRef<
  ElementRef<typeof DrawerContent>,
  ComponentPropsWithoutRef<typeof DrawerContent>
>(({ ...props }, ref) => (
  <Card className="rounded-none" asChild>
    <DrawerContent ref={ref} {...props} />
  </Card>
))

const DrawerPanel = forwardRef<
  ElementRef<typeof Card.Panel>,
  ComponentPropsWithoutRef<typeof Card.Panel>
>(({ size = "md", ...props }, ref) => <Card.Panel ref={ref} size={size} {...props} />)

const DrawerFooter = forwardRef<
  ElementRef<typeof Card.Footer>,
  ComponentPropsWithoutRef<typeof Card.Footer>
>(({ size = "md", ...props }, ref) => <Card.Footer ref={ref} size={size} {...props} />)

const DrawerClose = forwardRef<
  ElementRef<typeof DrawerPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} className={cx("-my-1", className)} {...props}>
    <IconX />
  </DrawerPrimitive.Close>
))

const DrawerCancel = forwardRef<
  ElementRef<typeof DrawerPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ children = "Cancel", ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DrawerPrimitive.Close>
))

export const Drawer = Object.assign(DrawerPrimitive.Root, {
  Trigger: DrawerPrimitive.Trigger,
  Content: DrawerContent,
  ContentCard: DrawerContentCard,
  Panel: DrawerPanel,
  Footer: DrawerFooter,
  Close: DrawerClose,
  Cancel: DrawerCancel,
})
