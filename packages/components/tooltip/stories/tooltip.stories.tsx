import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent 
} from '../src';


const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that displays informative text when users hover over or focus on an element.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic tooltip example
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Hover me
      </TooltipTrigger>
      <TooltipContent>
        This is a simple tooltip
      </TooltipContent>
    </Tooltip>
  ),
};

// Placement variants
export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Tooltip key={placement} placement={placement}>
          <TooltipTrigger className="bg-purple-500 text-white px-4 py-2 rounded">
            {placement.charAt(0).toUpperCase() + placement.slice(1)}
          </TooltipTrigger>
          <TooltipContent>
            Tooltip on {placement}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
};


export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="mb-2 text-center">
          Status: <span className="font-bold">{open ? 'Open' : 'Closed'}</span>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            Toggle tooltip
          </button>
        </div>
        
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger className="border border-dashed border-gray-400 px-4 py-2 rounded">
            Controlled tooltip
          </TooltipTrigger>
          <TooltipContent>
            This tooltip is controlled externally
          </TooltipContent>
        </Tooltip>
      </div>
    );
  },
};