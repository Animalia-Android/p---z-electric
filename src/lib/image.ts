import imageUrlBuilder from '@sanity/image-url';
// import { sanity } from './sanity.client';
import type { Image } from 'sanity';
import { sanity } from './sanity/client';

const builder = imageUrlBuilder(sanity);
export function urlFor(src: Image | any) {
  return builder.image(src);
}
