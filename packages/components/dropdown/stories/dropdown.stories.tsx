import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownContent, 
  DropdownItem 
} from '../src';


const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown component that provides contextual menus and options.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Basic dropdown example
export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger className="bg-blue-500 text-white p-2 rounded">
        Open Dropdown
      </DropdownTrigger>
      <DropdownContent className="bg-white shadow-lg p-2 rounded min-w-[150px]">
        <ul className="space-y-1">
          <DropdownItem className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
            Profile
          </DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
            Settings
          </DropdownItem>
          <DropdownItem className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
            Logout
          </DropdownItem>
        </ul>
      </DropdownContent>
    </Dropdown>
  ),
};

// Placement variants
export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Dropdown key={placement} placement={placement}>
          <DropdownTrigger className="bg-purple-500 text-white p-2 rounded">
            {placement.charAt(0).toUpperCase() + placement.slice(1)} Placement
          </DropdownTrigger>
          <DropdownContent className="bg-white shadow-lg p-2 rounded min-w-[150px]">
            <div className="p-2 text-center">{placement} placement</div>
            <ul className="space-y-1">
              <DropdownItem className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Option 1
              </DropdownItem>
              <DropdownItem className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Option 2
              </DropdownItem>
            </ul>
          </DropdownContent>
        </Dropdown>
      ))}
    </div>
  ),
};

// Controlled dropdown
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState('Select an option');
    
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-center mb-2">
          Selected: <strong>{selectedOption}</strong>
        </div>
        
        <Dropdown open={open} onOpenChange={setOpen}>
          <DropdownTrigger className="bg-green-500 text-white p-2 rounded min-w-[200px]">
            {selectedOption}
          </DropdownTrigger>
          <DropdownContent className="bg-white shadow-lg p-2 rounded min-w-[200px]">
            <ul className="space-y-1">
              {['Apple', 'Banana', 'Cherry', 'Dragon Fruit'].map((fruit) => (
                <DropdownItem 
                  key={fruit}
                  className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedOption(fruit);
                  }}
                >
                  {fruit}
                </DropdownItem>
              ))}
            </ul>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  },
};

