import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerTrigger, DrawerContent } from '../src';
import React from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' },
    placement: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Placement of the drawer',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Size of the drawer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <div style={{ padding: '20px' }}>
          <p>This is the drawer content.</p>
          <p>You can put anything you want in here.</p>
        </div>
      </DrawerContent>
    </Drawer>
  ),

};

export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)} style={{marginRight: '10px'}}>Open Drawer Externally</button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent>
            <div style={{ padding: '20px', minWidth: '300px' }}> {/* Ensure content has some base width */}
              <p>This is a controlled drawer.</p>
              <p>Its state is managed externally.</p>
              <button onClick={() => setIsOpen(false)}>Close from inside</button>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};


// Placement variants
export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Drawer key={placement} placement={placement}>
          <DrawerTrigger className="bg-purple-500 text-white p-2 rounded">
            {placement.charAt(0).toUpperCase() + placement.slice(1)} Placement
          </DrawerTrigger>
          <DrawerContent className="">
            <div className="p-2 text-center">{placement} placement</div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
        <Drawer key={size} size={size}>
          <DrawerTrigger className="bg-blue-500 text-white p-2 rounded">
            {size.charAt(0).toUpperCase() + size.slice(1)} Size
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-2 text-center">{size} size</div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
};