import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({ src, width = 0 }: ImageLoaderProps): string => src;
