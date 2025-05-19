import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,

} from '../src';
import React from 'react';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dialog component built on the native HTML dialog element for better accessibility and semantics.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Basic dialog example
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Open Dialog
        </button>
        <Dialog open={open}>
          <div>
            dialog content
            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </div>
        </Dialog>
      </>
    );
  },
};

