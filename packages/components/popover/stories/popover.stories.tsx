import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from '../src';
import React from 'react';

// Basic meta-information for the Popover component stories
const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      description: 'Placement of the popover relative to the trigger element.',
    },
    backdrop: {
      control: 'select',
      options: ['opaque', 'blur', 'transparent'],
      description: 'Backdrop effect for the popover.',
    },
  },
  args: {
    placement: 'bottom'    
  }
};
export default meta;

// Define the story type
type Story = StoryObj<typeof meta>;

// Default story demonstrating basic Popover usage
export const Default: Story = {
  render: (args) => (
    <Popover {...args}> {/* Main Popover component, often a context provider */}
      <PopoverTrigger>
          Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <p>This is the popover content.</p>
          <p>You can put any React elements here.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  args: {
    placement: 'bottom',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div style={{ textAlign: 'center' }}>
        <div
        >
          isOpen: {isOpen ? 'true' : 'false'}
        </div>
        <Popover {...args} open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger>Controlled Popover</PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: '16px', minWidth: '200px' }}>
              <p>This is a controlled popover.</p>
              <p>Its open state is managed externally.</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
  args: {
    placement: 'bottom',
  },
};
