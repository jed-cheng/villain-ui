import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../src/index';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'The content to display in the badge (numbers, text, symbols)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Controls the color scheme of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      }
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Default */
export const Default: Story = {
  render: (args) => (
    <Badge {...args} content="3">
      <span className="text-sm">Item</span>
    </Badge>
  ),
};

/* Colors Story */
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <Badge color="default" content="5">
        Default
      </Badge>
      <Badge color="primary" content="12">
        Primary
      </Badge>
      <Badge color="secondary" content="8">
        Secondary
      </Badge>
      <Badge color="success" content="✓">
        Success
      </Badge>
      <Badge color="warning" content="!">
       Warning
      </Badge>
      <Badge color="danger" content="99+">
       Danger
      </Badge>
    </div>
  ),
};

/* Sizes Story */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Badge size="sm" content="3" color="primary">
       Small
      </Badge>
      <Badge size="md" content="15" color="primary">
        Medium
      </Badge>
      <Badge size="lg" content="99+" color="primary">
        Large
      </Badge>
    </div>
  ),
};


export const Placement: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <Badge placement='top-right' content="3">
        <span className="text-sm">Item</span>
      </Badge>
      <Badge placement='top-left'  content="3">
        <span className="text-sm">Item</span>
      </Badge>
      <Badge placement='bottom-right'  content="3">
        <span className="text-sm">Item</span>
      </Badge>
      <Badge placement='bottom-left'  content="3">
        <span className="text-sm">Item</span>
      </Badge>
    </div>
  ),
}