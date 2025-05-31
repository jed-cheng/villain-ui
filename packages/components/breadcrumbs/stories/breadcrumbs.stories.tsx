import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreadcrumbItem, Breadcrumbs } from '../src'; 

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Controls the color scheme of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      }
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Default */
export const Default: Story = {
  render: (args) => (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  ),
};



/* Sizes Story */
export const Sizes: Story = {
  render: () => {
    const sizes = ["sm", "md", "lg"] as const;

    return (
      <div className="flex flex-col flex-wrap gap-4">
        {sizes.map((size) => (
          <Breadcrumbs key={size} size={size}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    );    
  }
};


export const Colors: Story = {
  render: () => {
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;

    return (
      <div className="flex flex-col flex-wrap gap-4">
        {colors.map((color) => (
          <Breadcrumbs key={color} color={color}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    );
  }
}


export const Variants: Story = {
  render: () => {
    const variants = ["solid", 'outline', 'ghost'] as const;

    return (
      <div className="flex flex-col flex-wrap gap-4">
        {variants.map((variant) => (
          <Breadcrumbs key={variant} variant={variant}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    );
  }
}

export const Radius: Story = {
  render: () => {
    const radius = ["full", "lg", "md", "sm", "none"] as const;

    return (
      <div className="flex flex-col flex-wrap gap-4">
        {radius.map((r) => (
          <Breadcrumbs key={r} radius={r} variant="solid">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    );
  }
}