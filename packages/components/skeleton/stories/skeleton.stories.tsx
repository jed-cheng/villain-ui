import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../src/index'; // Assuming Skeleton and SkeletonProps are exported
import React from 'react';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Toggles the loading state of the skeleton.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },


  },

} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[200px] space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </div>
  ),
};

export const Loaded: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const toggleLoad = () => {
      setIsLoading(!isLoading);
    };

  return (
    <div className="flex flex-col gap-3">
      <div className="w-[200px] space-y-5 p-4" >
        <Skeleton className="rounded-lg" isLoading={isLoading}>
          <div className="h-24 rounded-lg bg-secondary" />
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg" isLoading={isLoading}>
            <div className="h-3 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg" isLoading={isLoading}>
            <div className="h-3 w-full rounded-lg bg-secondary-300" />
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg" isLoading={isLoading}>
            <div className="h-3 w-full rounded-lg bg-secondary-200" />
          </Skeleton>
        </div>
      </div>
      <button color="secondary"   onClick={toggleLoad}>
        {isLoading ? "Hide" : "Show"} Skeleton
      </button>
    </div>
  );
  }
}
