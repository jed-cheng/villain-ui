import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar, NavbarMenu, NavbarMenuItem } from '../src';
import { NavbarBrand } from '../src/navbar-brand';
import { Angry, Menu } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col w-screen h-screen ">
        <Story />
        <div className="px-6 flex gap-4 flex-col pb-16 flex-grow">
          <h1 className="mt-4 font-bold text-4xl">Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa placerat duis ultricies.</p><p>Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.</p><p>Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p><p>Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In pellentesque massa placerat duis ultricies. Sit amet massa vitae tortor condimentum. Morbi tincidunt augue interdum velit euismod. Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper eget. Vitae justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at quis. Et leo duis ut diam quam nulla porttitor massa. Eget nunc scelerisque viverra mauris. Suscipit tellus mauris a diam maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in egestas erat imperdiet sed euismod nisi porta. In ante metus dictum at tempor commodo. In cursus turpis massa tincidunt dui ut ornare lectus. Tempus iaculis urna id volutpat. Iaculis eu non diam phasellus vestibulum lorem sed risus.</p><p>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Faucibus pulvinar elementum integer enim neque volutpat. Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Praesent semper feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ut lectus arcu bibendum at. Integer enim neque volutpat ac. Diam sit amet nisl suscipit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis lectus nulla at volutpat diam ut. Turpis egestas integer eget aliquet. Adipiscing tristique risus nec feugiat in fermentum posuere. Morbi tempus iaculis urna id. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.</p>
          <p>Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.</p><p>Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
          </div>
        </div>
    ),
  ]

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
      <Navbar >
        <NavbarBrand>
          <Angry />
          <p className="text-lg font-bold">
            VillainUI
          </p>
        </NavbarBrand>

         <div className=" hidden sm:flex gap-2 justify-self-center  ">
            <p>
              Features
            </p>
            <p>
              Pricing
            </p>
            <p>
              About
            </p>
         </div>
         <button
            className="border p-1 text-sm rounded hover:bg-foreground/50 transition-colors"
         >
          Get Started
          </button>
      </Navbar>
  ),
};


export const Sticky: Story = {
  render: () => (
      <Navbar className='sticky top-0  z-50 '>
        <NavbarBrand>
          <Angry />
          <p className="text-lg font-bold">
            VillainUI
          </p>
        </NavbarBrand>

         <div className=" sm:flex gap-2 justify-self-center hidden">
            <p>
              Features
            </p>
            <p>
              Pricing
            </p>
            <p>
              About
            </p>
         </div>
         <button
            className="border p-1 text-sm rounded hover:bg-foreground/50 transition-colors"
         >
          Get Started
          </button>
      </Navbar>
  ),
};

export const WithMenu: Story = {

  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <Navbar className='sticky top-0  z-50 '>
        <button onClick={() => setOpen(!open)} className="sm:hidden">
          <Menu />
        </button>
        <NavbarMenu open={open} onOpenChange={setOpen} className="sm:hidden">
          <NavbarMenuItem>
            Features
          </NavbarMenuItem>
          <NavbarMenuItem>
            Pricing
          </NavbarMenuItem>
          <NavbarMenuItem>
            About
          </NavbarMenuItem>
        </NavbarMenu>
        <NavbarBrand>
          <Angry />
          <p className="text-lg font-bold">
            VillainUI
          </p>
        </NavbarBrand>

         <div className=" sm:flex gap-2 justify-self-center hidden">
            <p>
              Features
            </p>
            <p>
              Pricing
            </p>
            <p>
              About
            </p>
         </div>
         <button
            className="border p-1 text-sm rounded hover:bg-foreground/50 transition-colors"
         >
          Get Started
          </button>
      </Navbar>
    )      
  }
};


