import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Carousel, CarouselNext, CarouselPrevious } from "../src"; // Assuming Carousel is exported from ../src

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;


const items = [
  { content: <div className="w-full h-full flex items-center justify-center "> Item 1 </div> },
  { content: <div className="w-full h-full flex items-center justify-center ">Item 2</div> },
  { content: <div className="w-full h-full flex items-center justify-center ">Item 3</div> },
]
export const Default: Story = {

  render: (args) => {
    const [index, setIndex] = React.useState(0);

    return (
      <>
          <div className="w-[300px] h-[300px] border">
          <Carousel
            index ={index}
            onIndexChange={setIndex}
            items={items}
            className="font-bold text-lg"
          >
          </Carousel>
        </div>
        <div className="flex gap-2 justify-center my-2">
          <CarouselPrevious
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
          />
          <CarouselNext
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIndex((prev) => (prev + 1) % items.length)}
          />
        </div>
      </>
    )
  }
};


export const AutoPlay: Story = {
  render: (args) => {

    return (
      <div className="w-[300px] h-[300px] border">
        <Carousel
          items={items}
          autoPlay
          autoPlayInterval={2000}
          className="font-bold text-lg"
        >
        </Carousel>
      </div>
    )
  }
}