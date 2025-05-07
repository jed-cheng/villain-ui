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
      description: "The color variant of the switch"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the switch"
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled"
    },
    defaultChecked: {
      control: "boolean",
      description: "Whether the switch is initially checked"
    },
    onChange: {
      action: "changed"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Basic switch
export const Default: Story = {

};