import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: [
      'flex',
      'flex-col',
      'rounded-lg',
      'max-w-md',
      'bg-default',
      'shadow-md',
      'text-white'
    ],
    header: "p-3",
    body: "p-3",
    footer: "p-3",
  },
})

export const { base, header, body, footer } = card();