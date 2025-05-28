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
  args: {
    open: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)} style={{marginRight: '10px'}}>Open Drawer Externally</button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>Toggle Drawer</DrawerTrigger>
          <DrawerContent>
            <div style={{ padding: '20px', width: '300px' }}>
              <p>This is a controlled drawer.</p>
              <p>Its state is managed externally.</p>
              <button onClick={() => setIsOpen(false)}>Close from inside</button>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
  args: {
    // open and onOpenChange are handled by the render function's state
  },
};

