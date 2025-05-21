import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src';
import { AccordionItem } from '../src/accordion-item';
import { AccordionTrigger } from '../src/accordion-trigger';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple accordion component.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for Item 1</AccordionContent>
      </AccordionItem>

    </Accordion>
  ),
};
