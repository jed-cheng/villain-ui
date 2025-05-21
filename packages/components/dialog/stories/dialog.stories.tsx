import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
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
          <DialogHeader>
            <h2>Dialog Title</h2>
          </DialogHeader>
          <DialogBody>
            <p>This is the main content of the dialog. You can put any React elements here.</p>
            <p>For example, a form, some text, or other components.</p>
          </DialogBody>
          <DialogFooter>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-black p-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                alert('Submitted!');
                setOpen(false);
              }}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
          </DialogFooter>
        </Dialog>
      </>
    );
  },
};

// Size variants example
export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = React.useState<null | 'sm' | 'md' | 'lg'>(null);
    return (
      <div className="flex space-x-2">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <button
            key={size}
            onClick={() => setOpenSize(size)}
            className="bg-purple-500 text-white p-2 rounded"
          >
            Open {size.toUpperCase()} Dialog
          </button>
        ))}
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Dialog
            key={`dialog-${size}`}
            open={openSize === size}
            size={size}
            onClose={() => setOpenSize(null)}
          >
            <DialogHeader>
              <h2>{size.toUpperCase()} Dialog</h2>
            </DialogHeader>
            <DialogBody>
              <p>This dialog has size: <strong>{size}</strong>.</p>
              <p>Content can be placed here.</p>
            </DialogBody>
            <DialogFooter>
              <button
                onClick={() => setOpenSize(null)}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Close
              </button>
            </DialogFooter>
          </Dialog>
        ))}
      </div>
    );
  },
};

// Placement variants example
export const Placements: Story = {
  render: () => {
    const [openPlacement, setOpenPlacement] = React.useState<null | 'top' | 'center' | 'bottom'>(null);
    return (
      <div className="flex space-x-2">
        {(['top', 'center', 'bottom'] as const).map((placement) => (
          <button
            key={placement}
            onClick={() => setOpenPlacement(placement)}
            className="bg-green-500 text-white p-2 rounded"
          >
            Open {placement.charAt(0).toUpperCase() + placement.slice(1)} Dialog
          </button>
        ))}
        {(['top', 'center', 'bottom'] as const).map((placement) => (
          <Dialog
            key={`dialog-${placement}`}
            open={openPlacement === placement}
            placement={placement}
            onClose={() => setOpenPlacement(null)}
          >
            <DialogHeader>
              <h2>{placement.charAt(0).toUpperCase() + placement.slice(1)} Dialog</h2>
            </DialogHeader>
            <DialogBody>
              <p>This dialog is placed at the: <strong>{placement}</strong>.</p>
            </DialogBody>
            <DialogFooter>
              <button
                onClick={() => setOpenPlacement(null)}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Close
              </button>
            </DialogFooter>
          </Dialog>
        ))}
      </div>
    );
  },
};

// Backdrop variants example
export const Backdrops: Story = {
  render: () => {
    const [openBackdrop, setOpenBackdrop] = React.useState<null | 'opaque' | 'blur' | 'transparent'>(null);
    const backdropVariants = ['opaque', 'blur', 'transparent'] as const;

    return (
      <div className="flex space-x-2">
        {backdropVariants.map((backdrop) => (
          <button
            key={backdrop}
            onClick={() => setOpenBackdrop(backdrop)}
            className="bg-yellow-500 text-black p-2 rounded"
          >
            Open {backdrop} Backdrop
          </button>
        ))}
        {backdropVariants.map((backdrop) => (
          <Dialog
            key={`dialog-${backdrop}`}
            open={openBackdrop === backdrop}
            backdrop={backdrop} // Make sure your Dialog component accepts and uses this prop
            onClose={() => setOpenBackdrop(null)}
          >
            <DialogHeader>
              <h2>{backdrop.charAt(0).toUpperCase() + backdrop.slice(1)} Backdrop Dialog</h2>
            </DialogHeader>
            <DialogBody>
              <p>This dialog has a <strong>{backdrop}</strong> backdrop.</p>
              <p>Observe the effect behind the dialog.</p>
            </DialogBody>
            <DialogFooter>
              <button
                onClick={() => setOpenBackdrop(null)}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Close
              </button>
            </DialogFooter>
          </Dialog>
        ))}
      </div>
    );
  },
};

