// Will fix typescript error cannot find module  "../assets/img/album-5.jpg" or its corresponding type declarations
declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}
