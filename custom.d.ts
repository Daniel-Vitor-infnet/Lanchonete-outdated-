// O Type tava enchendo o saco dando erro pro causa de png, aí procurei na net e achei esa forma

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}
