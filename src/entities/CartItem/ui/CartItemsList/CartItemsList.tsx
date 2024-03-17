import {CartItem} from "../CartItem/CartItem";
import {type CartItem as CartItemType} from '../../model/types/cartItem'
import cls from './CartItemsList.module.scss'
import {observer} from "mobx-react";

interface CartItemsListProps {
    items: CartItemType[],
    onUpdateItem: (data: CartItemType) => void;
    onDeleteItem: (id: number) => void;
}

export const CartItemsList = observer((props: CartItemsListProps) => {
    const {
        items,
        onUpdateItem,
        onDeleteItem
    } = props;

    const updateItemHandler = (data: CartItemType) => {
        onUpdateItem(data)
    }

    return (
        <div className={cls.list}>
            {
                items.map(item => {
                        return (<CartItem
                            onChangeQuantity={(value: number) => updateItemHandler({...item, quantity: value})}
                            onDeleteItem={() => onDeleteItem(item.id)}
                            key={item.id}
                            {...item}
                        />)
                    }
                )
            }
        </div>
    )
})