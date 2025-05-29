import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "../src";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        Card Title
      </CardHeader>
      <CardBody>
        <p>This is the body of the card.</p>
        <p>It can contain any content you like.</p>
      </CardBody>
      <CardFooter>
        Card Footer
      </CardFooter>
    </Card>
  ),
};

export const BlurredCard: Story = {
  render: (args) => (
    <div 
    className="relative"
    >
    <img className="size-32 rounded-lg object-cover" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;h=1000&amp;q=90"></img>
    <Card {...args} className="backdrop-blur-md bg-white/30 absolute inset-6">
      <CardHeader>
        Blurred Card Title
      </CardHeader>
      <CardBody>
        <p>This is the body of the blurred card.</p>
        <p>It can contain any content you like.</p>
      </CardBody>
      <CardFooter>
        Blurred Card Footer
      </CardFooter>
    </Card>
    </div>

  ),
};