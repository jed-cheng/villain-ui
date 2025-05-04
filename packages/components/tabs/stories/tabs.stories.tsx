import type { Meta, StoryObj } from "@storybook/react";
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

  render: (args) => (
    <Tabs {...args}>
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};


export const Vertical: Story = {
  render: (args) => (
    <Tabs {...args} orientation="vertical">
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};


export const Underline: Story = {
  render: (args) => (
    <Tabs {...args} variant="underline">
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
}

export const Light: Story = {
  render: (args) => (
    <Tabs {...args} variant="light">
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};

export const Bordered: Story = {
  render: (args) => (
    <Tabs {...args} variant="bordered">
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};




export const Disabled: Story = {

  render: (args) => ( 
    <Tabs {...args} disabled>
      <Tab value="tab1" title="Tab 1" />
      <Tab value="tab2" title="Tab 2" />
      <Tab value="tab3" title="Tab 3" />
    </Tabs>
  ),
};

export const DisabledTab: Story = {

    render: (args) => (
      <Tabs {...args}>
        <Tab value="tab1" title="Tab 1" />
        <Tab value="tab2" title="Tab 2" disabled />
        <Tab value="tab3" title="Tab 3" />
      </Tabs>
    ),
  };


