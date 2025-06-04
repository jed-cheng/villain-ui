import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: [
      'flex',
      'gap-2',
      'px-6',
      'w-full',
      'items-center',
      'justify-between',
      'whitespace-nowrap',
      'bg-white',
      'flex-shrink-0',
      '!h-[var(--nav-height)]',
    ],
    brand: [
      'basis-0',
      'flex',
      'gap-2',
      'items-center',
    ],
    content: "",
    menu: [
      'fixed',
      'top-[var(--nav-height)]',
      'px-6',
      'pt-2',
      'inset-x-0',
      'flex',
      'flex-col',
      'gap-2',
      'h-[calc(100dvh-var(--nav-height))]',
      'overflow-y-auto',
      'bg-white',
    ],
    menuItem: [
      'px-4',
      'text-lg',
      'font-semibold',
    ],
  }
})

export const { base, brand, content, menu, menuItem } = navbar();