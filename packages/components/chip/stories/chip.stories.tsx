import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '../src';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [ 'sm', 'md', 'lg', ],
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost'],
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
};



export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip size="sm" color="primary">Small</Chip>
      <Chip size="md" color="primary">Medium</Chip>
      <Chip size="lg" color="primary">Large</Chip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip variant="solid" color="primary">Solid</Chip>
      <Chip variant="outlined" color="primary">Outlined</Chip>
      <Chip variant="ghost" color="primary">Ghost</Chip>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="danger">Danger</Chip>
      <Chip color="warning">Warning</Chip>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Chip radius="sm" color="primary">Small</Chip>
      <Chip radius="md" color="primary">Medium</Chip>
      <Chip radius="lg" color="primary">Large</Chip>
      <Chip radius="full" color="primary">Full</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    color: 'primary',
  },
};
