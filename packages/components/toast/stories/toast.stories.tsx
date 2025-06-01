import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toasts, ToastItem } from "../src"
import React from "react";
import {  addToast } from "../src/toast-store";


const meta: Meta<typeof ToastItem> = {
  title: "Components/Toast",
  component: ToastItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    )
  ],
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Stories
// ============================================================================

export const Default: Story = {
  render: (args) => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => {
      setCounter(counter + 1);
      addToast({
        content: <>Toast #{counter + 1}</>,
        timeout: 5000,
      })
    }
    return (
      <>
        <Toasts />
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleClick}
        >
          Show Toast
        </button>
      </>
    )
  }
}

const placements = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center'
] as const

type Placement = (typeof placements)[number];

export const Placements: Story = {
  render: () => {

    const [placement, setPlacement] = React.useState<Placement>("bottom-right");

    return (
      <>
        <Toasts placement={placement} />
        <div className="flex flex-wrap gap-2">
          {placements.map((p) => (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              key={p}
              onClick={() => {
                setPlacement(p);
                addToast({
                  content: <>Toast at {p}</>,
                  timeout: 5000,
                })
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </>
    )
  }
}


