export const importImage = (imgName: string): string =>
  new URL(`../assets/images/${imgName}`, import.meta.url).href;

export const importVideo = (videoName: string): string =>
  new URL(`../assets/videos/${videoName}`, import.meta.url).href;

export const importIcons = (iconName: string): string =>
  new URL(`../assets/icons/${iconName}`, import.meta.url).href;

