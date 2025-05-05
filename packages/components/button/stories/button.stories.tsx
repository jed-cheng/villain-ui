import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src/index'; // Assuming Button is exported from index.ts

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // Define argTypes if needed, e.g., for controlling props via Storybook UI
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'underline'],
    },
    disabled: {
      control: { type: 'boolean' },
    }

  },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/* color variants */

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Primary: Story = {
  render: (args) => <Button {...args} color='primary'>Button</Button>,
};


/* size variants */
export const Small: Story = {
  render: (args) => <Button {...args} size='sm'>Button</Button>,
};

export const Medium: Story = {
  render: (args) => <Button {...args} size='md'>Button</Button>,
};

export const Large: Story = {
  render: (args) => <Button {...args} size='lg'>Button</Button>,
};

/* variant variants */

export const Outline: Story = {
  render: (args) => <Button {...args} variant='outline'>Button</Button>,
};

export const Ghost: Story = {
  render: (args) => <Button {...args} variant='ghost'>Button</Button>,
};

export const Underline: Story = {
  render: (args) => <Button {...args} variant='underline'>Button</Button>,
};



/* disabled */
export const Disabled: Story = {
  render: (args) => <Button {...args} disabled>Button</Button>,
}



