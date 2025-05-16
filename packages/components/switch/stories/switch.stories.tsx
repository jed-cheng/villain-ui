import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../src/switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "danger", "warning"],
      description: "The color variant of the switch",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      }
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the switch",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      }
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      }
    },
    defaultChecked: {
      control: "boolean",
      description: "Whether the switch is initially checked",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      }
    },
    onChange: {
      action: "changed"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

/* Basic switch */
export const Default: Story = {
  render: (args) => <Switch {...args} />,
};

/* Size variants */
export const Small: Story = {
  render: (args) => <Switch {...args} size="sm" />,
};

export const Medium: Story = {
  render: (args) => <Switch {...args} size="md" />,
};

export const Large: Story = {
  render: (args) => <Switch {...args} size="lg" />,
};

/* State variants */
export const Checked: Story = {
  render: (args) => <Switch {...args} defaultChecked />,
};

export const Disabled: Story = {
  render: (args) => <Switch {...args} disabled />,
};

export const DisabledChecked: Story = {
  render: (args) => <Switch {...args} disabled defaultChecked />,
};