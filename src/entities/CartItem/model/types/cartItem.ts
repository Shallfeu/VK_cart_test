export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total?: number;
    description: string;
    thumbnail: string;
}