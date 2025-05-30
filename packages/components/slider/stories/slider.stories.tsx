import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '../src/index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Slider',
  component: Slider,
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
      options: ['default', 'primary', 'secondary', 'success', 'danger'],
      description: 'Controls the color scheme of the slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    radius: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Controls the border radius of the slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'When true, the slider is disabled and cannot be changed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      }
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      }
    },
    step: {
      control: { type: 'number' },
      description: 'The step value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      }
    },
    defaultValue: {
      control: { type: 'number' },
      description: 'The default value of the slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      }
    }
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/* Default */
export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} />
    </div>
  )
};

export const Primary: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} color="primary" defaultValue={50} />
    </div>
  )
};


/* Size variants */
export const Small: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} size="sm" defaultValue={50} />
    </div>
  )
};

export const Medium: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} size="md" defaultValue={50} />
    </div>
  )
};

export const Large: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} size="lg" defaultValue={50} />
    </div>
  )
};

/* Radius variants */
export const RadiusSmall: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} radius="sm" defaultValue={50} />
    </div>
  )
};

export const RadiusMedium: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} radius="md" defaultValue={50} />
    </div>
  )
};

export const RadiusLarge: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} radius="lg" defaultValue={50} />
    </div>
  )
};

export const RadiusFull: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} radius="full" defaultValue={50} />
    </div>
  )
};

/* Step */
export const Step: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} step={10} defaultValue={50} />
    </div>
  )
};

/* Disabled */
export const Disabled: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} disabled defaultValue={50} />
    </div>
  )
};

/* Custom ranges */
export const CustomRange: Story = {
  render: (args) => (
    <div style={{ width: 300, padding: '20px' }}>
      <Slider {...args} min={0} max={200} step={10} defaultValue={100} />
    </div>
  )
};