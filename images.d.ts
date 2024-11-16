// src/images.d.ts
declare module "*.png" {
  const value: any; // 'value' is the image source, it can be a URL or require()
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}
