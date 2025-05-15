import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../src/index';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    defaultValue: {
      control: { type: 'object' } // For array input like [50]
    }
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderSlider = (args: any) => {
  const containerStyle: React.CSSProperties = args.orientation === 'vertical' 
    ? { height: 300, padding: '20px' } 
    : { width: 300, padding: '20px' };
  return (
    <div style={containerStyle}>
      <Slider {...args} />
    </div>
  );
};

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    size: 'md',
    color: 'primary',
    radius: 'full',
  },
  render: renderSlider,
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
    defaultValue: [25],
  },
  render: renderSlider,
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    defaultValue: [30],
  },
  render: renderSlider,
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    defaultValue: [70],
  },
  render: renderSlider,
};

export const DangerColor: Story = {
  args: {
    ...Default.args,
    color: 'danger',
    defaultValue: [40],
  },
  render: renderSlider,
};

export const NoRadius: Story = {
  args: {
    ...Default.args,
    radius: 'none',
    defaultValue: [60],
  },
  render: renderSlider,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    defaultValue: [25],
    disabled: true,
  },
  render: renderSlider,
};

export const CustomRangeAndStep: Story = {
  args: {
    defaultValue: [10],
    min: 0,
    max: 20,
    step: 2,
    orientation: 'horizontal',
    size: 'md',
    color: 'primary',
    radius: 'full',
  },
  render: renderSlider,
};