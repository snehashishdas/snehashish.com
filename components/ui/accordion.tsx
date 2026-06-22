'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        // Catalogue entry: calm hairline that warms toward the accent on hover,
        // a faint parchment lift when open.
        'group/item transition-colors duration-300',
        'hover:border-page-accent/40 data-[state=open]:border-page-accent/40',
        'data-[state=open]:bg-page-accent/[0.05]',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex flex-1 items-start justify-between gap-6 text-left outline-none transition-all',
          'disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        {...props}
      >
        {children}
        {/* Circled plus / minus marker — fills and inverts to a minus when open */}
        <span
          aria-hidden="true"
          className="relative mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover/item:border-page-accent group-hover/item:text-page-accent group-data-[state=open]/item:border-page-accent group-data-[state=open]/item:bg-page-accent group-data-[state=open]/item:text-background"
        >
          <span className="absolute h-px w-3 bg-current" />
          <span className="absolute h-3 w-px bg-current transition-transform duration-300 group-data-[state=open]/item:scale-y-0" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pt-1 pb-5', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
