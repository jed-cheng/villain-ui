import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: [
      'flex',
      'gap-2',
      'px-6',
      'w-full',
      'py-2',
      'items-center',
      'justify-between',
      'whitespace-nowrap',
      'bg-white',
    ],
    brand: [
      'basis-0',
      'flex',
      'gap-2',
      'items-center',
    ],
    content: "",
    menu: "",
    menuItem: "",
  }
})

export const { base, brand, content, menu, menuItem } = navbar();