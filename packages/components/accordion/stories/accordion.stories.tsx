import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src';
import { AccordionItem } from '../src/accordion-item';
import { AccordionTrigger } from '../src/accordion-trigger';
// Assuming the content component is correctly named and exported as AccordionContent
import { AccordionContent } from '../src/accordion-content';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal a section of content.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time.',
    },
    defaultValue: {
      control: 'object',
      description: 'The value of the item(s) to be initially open.',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', undefined],
      description: 'Visual style of the accordion items.',
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: 'single',
    defaultValue: ['item-1'], // Open the first item by default
  },
  render: (args) => (

    <Accordion {...args}>
      <AccordionItem value="item-1" className="border-b last:border-b-0">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 1 Title
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          This is the content for the first section. It can contain any React nodes,
          like text, images, or other components.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b last:border-b-0">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 2 Title
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          Content for the second section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 3 Title (Initially Closed)
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          And here is the third section's content. This item starts closed
          because its value is not in `defaultValue`.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['item-1', 'item-3'],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" className="border-b last:border-b-0">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 1 Title
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          This is the content for the first section. It can contain any React nodes,
          like text, images, or other components.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b last:border-b-0">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 2 Title
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          Content for the second section. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className=" hover:bg-muted/50  text-left">
          Section 3 Title (Initially Closed)
        </AccordionTrigger>
        <AccordionContent className=" text-sm text-muted-foreground">
          And here is the third section's content. This item starts closed
          because its value is not in `defaultValue`.
        </AccordionContent>
      </AccordionItem>
    </Accordion>  
  ),
};