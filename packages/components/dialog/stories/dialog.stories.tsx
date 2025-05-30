import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
  argTypes: {

  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Basic dialog example using DialogTrigger
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="bg-blue-500 text-white p-2 rounded">
        Open Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2>Dialog Title</h2>
        </DialogHeader>
        <DialogBody>
          <p>This is the main content of the dialog. You can put any React elements here.</p>
          <p>For example, a form, some text, or other components.</p>
        </DialogBody>
        <DialogFooter>
          <DialogTrigger className="bg-gray-300 text-black p-2 rounded mr-2">
            Cancel
          </DialogTrigger>
          <button
            onClick={() => alert('Submitted!')}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Controlled dialog example with explicit open state management
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="bg-purple-500 text-white p-2 rounded"
          >
            Open Dialog
          </button>
          <div>Dialog state: {open ? 'Open' : 'Closed'}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <h2>Controlled Dialog</h2>
            </DialogHeader>
            <DialogBody>
              <p>This dialog is controlled externally through state.</p>
              <p>The dialog's open state is: <strong>{open ? 'Open' : 'Closed'}</strong></p>
            </DialogBody>
            <DialogFooter>
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-300 text-black p-2 rounded mr-2"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert('Action performed!');
                  setOpen(false);
                }}
                className="bg-purple-500 text-white p-2 rounded"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

// Size variants
export const Sizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          {sizes.map((size) => (
            <Dialog key={size} size={size}>
              <DialogTrigger className="bg-purple-500 text-white p-2 rounded">
                {size.toUpperCase()} Dialog
              </DialogTrigger>
              <DialogContent size={size}>
                <DialogHeader>
                  <h2>{size.toUpperCase()} Dialog</h2>
                </DialogHeader>
                <DialogBody>
                  <p>This dialog has size: <strong>{size}</strong>.</p>
                  <p>Content can be placed here.</p>
                </DialogBody>
                <DialogFooter>
                  <DialogTrigger className="bg-gray-300 text-black p-2 rounded">
                    Close
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    );
  },
};

// Placement variants
export const Placements: Story = {
  render: () => {
    const placements = ['top', 'center', 'bottom'] as const;
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          {placements.map((placement) => (
            <Dialog key={placement} placement={placement}>
              <DialogTrigger className="bg-green-500 text-white p-2 rounded">
                {placement.charAt(0).toUpperCase() + placement.slice(1)}
              </DialogTrigger>
              <DialogContent placement={placement}>
                <DialogHeader>
                  <h2>{placement.charAt(0).toUpperCase() + placement.slice(1)} Dialog</h2>
                </DialogHeader>
                <DialogBody>
                  <p>This dialog is placed at: <strong>{placement}</strong>.</p>
                </DialogBody>
                <DialogFooter>
                  <DialogTrigger className="bg-gray-300 text-black p-2 rounded">
                    Close
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    );
  },
};

// Backdrop variants
export const Backdrops: Story = {
  render: () => {
    const backdropVariants = ['opaque', 'blur', 'transparent'] as const;
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          {backdropVariants.map((backdrop) => (
            <Dialog key={backdrop} backdrop={backdrop}>
              <DialogTrigger className="bg-yellow-500 text-black p-2 rounded">
                {backdrop.charAt(0).toUpperCase() + backdrop.slice(1)}
              </DialogTrigger>
              <DialogContent backdrop={backdrop}>
                <DialogHeader>
                  <h2>{backdrop.charAt(0).toUpperCase() + backdrop.slice(1)} Backdrop</h2>
                </DialogHeader>
                <DialogBody>
                  <p>This dialog has a <strong>{backdrop}</strong> backdrop.</p>
                  <p>Observe the effect behind the dialog.</p>
                </DialogBody>
                <DialogFooter>
                  <DialogTrigger className="bg-gray-300 text-black p-2 rounded">
                    Close
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    );
  },
};
