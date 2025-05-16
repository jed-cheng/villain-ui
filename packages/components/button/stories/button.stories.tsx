import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src/index'; // Assuming Button is exported from index.ts
import { Heart } from 'lucide-react';

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
   color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Controls the color scheme of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost'],
      description: 'Controls the variant/style of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'When true, the button is disabled and cannot be clicked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
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




/* disabled */
export const Disabled: Story = {
  render: (args) => <Button {...args} disabled>Button</Button>,
}

/* with icon */
export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Heart />
      Button
    </Button>
  ),
}

export const IconOnly: Story = {
  render: (args) => (
    <Button isIconOnly {...args}>
      <Heart />
    </Button>
  ),
}



