import httpService from "@/shared/services/http.service.ts";
import {CartItem} from "@/entities/CartItem/model/types/cartItem.ts";
import {AxiosError} from "axios";

interface ResponseType {
    products: CartItem[]
}

export const fetchCartItems = async () => {
    try {
        const {data} = await httpService.get<ResponseType>('cart/1');
        return data;
    } catch (err: unknown) {
        // Here we can handle our error depending on context
        // is it cart items or another entity, we can change behavior of handler
        const error = err as AxiosError
        console.log(error)
    }
}