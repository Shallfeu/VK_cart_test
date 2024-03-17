import {makeAutoObservable} from "mobx";
import {fetchCartItems} from "@/entities/CartItem/model/services/fetchCartItems.ts";
import {CartItem} from "@/entities/CartItem/model/types/cartItem.ts";

export class CartStore {
    isLoading: boolean = false;
    cartItems: CartItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    itemsPrices = () => {
        return this.cartItems.map(item => ({
            total: item.price * item.quantity,
            id: item.id
        }))
    }

    fetchCartItems = () => {
        this.isLoading = true;
        fetchCartItems().then((response) => {
            if (response) {
                const {products} = response
                this.cartItems = products
            }
            this.isLoading = false;
        })
    }

    deleteItem = (id: number) => {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
    }

    updateItem = (data: CartItem) => {
        this.cartItems = this.cartItems.map(item => {
            if (item.id === data.id) {
                item = data;
            }
            return item;
        })
    }
}

