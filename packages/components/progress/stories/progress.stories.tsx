import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, ProgressProps } from '../src/index'; // Assuming Progress and ProgressProps are exported
import React from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0 },
      description: 'The current value of the progress bar.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'The maximum value of the progress bar.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },

  },

} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-64'>
      <Progress {...args} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} color="primary" value={20}  />
      <Progress {...args} color="secondary" value={30}  />
      <Progress {...args} color="success" value={50}  />
      <Progress {...args} color="warning" value={70}  />
      <Progress {...args} color="danger" value={90}  />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-64">
      <Progress {...args} size="sm" value={25} />
      <Progress {...args} size="md" value={50} />
      <Progress {...args} size="lg" value={75} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    value: 60,
    disabled: true,
  },
  render: (args) => (
    <div className='w-64'>
      <Progress {...args} />
    </div>
  ),
};

export const Controlled : Story = {
  render: (args) => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 10));
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className='w-64'>
        <Progress
          size="md"
          value={value}
        />
      </div>
    )
  }
}
