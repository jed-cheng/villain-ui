import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, Tab } from "../src";
import { TabsList } from "../src/tabs-list";
import { TabsContent } from "../src/tabs-content";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'md',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'danger', 'success', 'warning'],
      defaultValue: 'primary',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'underline', 'light', 'bordered'],
      defaultValue: 'solid',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Stories
// ============================================================================

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};


export const Vertical: Story = {
  render: (args) => (
    <Tabs {...args} orientation="vertical">
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};


export const Underline: Story = {
  render: (args) => (
    <Tabs {...args} variant="underline">
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
}

export const Ghost: Story = {
  render: (args) => (
    <Tabs {...args} variant="ghost">
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};




export const Disabled: Story = {
  render: (args) => ( 
    <Tabs {...args} disabled>
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2" disabled>Tab 2</Tab>
        <Tab value="tab3">Tab 3</Tab>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};


