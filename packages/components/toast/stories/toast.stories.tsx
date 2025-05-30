import type { Meta, StoryObj } from "@storybook/react-vite";
import { addToast, Toasts, ToastItem } from "../src"


const meta: Meta<typeof ToastItem> = {
  title: "Components/Toast",
  component: ToastItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// Stories
// ============================================================================

export const Default: Story = {
  render: (args) => (
    <>
      <Toasts />
      <button
        onClick={() => {
          addToast({
            id: "toast-1",
            message: "This is a toast message",
          });
        }}
      >
        Show Toast
      </button>
    </>

  ),
};


