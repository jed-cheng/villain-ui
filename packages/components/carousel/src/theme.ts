import { tv, VariantProps } from "tailwind-variants";

export const carousel = tv({
  slots: {
    base: 'w-full h-full relative overflow-hidden',
    content: 'w-full h-full absolute flex',
    item: ' w-full h-full  flex-shrink-0',
  },
})

export const { base, content, item } = carousel();
export type CarouselVariants = VariantProps<typeof carousel>;