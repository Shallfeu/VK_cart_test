import cls from './Cart.module.scss'
import {useStore} from "@/app/providers/StoreProvider/config/rootStoreContext.ts";
import {observer} from "mobx-react";
import {CartItemsList} from "@/entities/CartItem";
import {CartWidget} from "@/entities/CartItem/ui/CartWidget/CartWidget.tsx";
import {useEffect} from "react";
import {PageLoader} from "@/widgets/PageLoader";

export const Cart = observer(() => {
    const {cartStore} = useStore()
    const {
        cartItems,
        isLoading,
        itemsPrices,
        fetchCartItems,
        deleteItem,
        updateItem
    } = cartStore

    useEffect(() => {
        fetchCartItems()
    }, [fetchCartItems]);

    if(isLoading) {
        return <PageLoader />
    }

    if(!cartItems.length) {
        return <>There is no products yet.</>
    }

    return (
        <div className={cls.cart}>
            <div className={cls.cart__list}>
                <CartItemsList items={cartItems} onUpdateItem={updateItem} onDeleteItem={deleteItem}/>
            </div>

            <div className={cls.cart__widget}>
                <CartWidget itemsPrices={itemsPrices()}/>
            </div>
        </div>
    )
})