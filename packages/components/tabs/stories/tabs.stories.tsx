import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs, Tab } from "../src"; // Assuming TabsCursor is internal and shown via Tabs

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Define argTypes if needed, e.g., for controlling props via Storybook UI
  },
  // Decorator to provide state for controlled Tabs
  decorators: [
    // (Story) => {
    //   const [value, setValue] = useState<string | null>("tab1");
    //   return <Story args={{ value , onValueChange: setValue }} />;
    // },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Stories
// ============================================================================

export const Default: Story = {
  args: {
    // Default value is handled by the decorator's state
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
    args: {
      // Default value is handled by the decorator's state
    },
    render: (args) => (
      <Tabs {...args}>
        <Tab value="tab1" title="Tab 1" />
        <Tab value="tab2" title="Tab 2 (Disabled)" disabled />
        <Tab value="tab3" title="Tab 3" />
      </Tabs>
    ),
  };
