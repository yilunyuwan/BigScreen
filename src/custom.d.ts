declare interface Window {
  pageWidth: number
  pageHeight: number
}

declare module "*.png" {
  const value: any;
  export = value;
}