import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { sanity } from './sanity/client';

const builder = imageUrlBuilder(sanity);
export function urlFor(src: Image | { asset: { _ref: string } }) {
  return builder.image(src);
}
