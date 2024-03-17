import {CartItem as CartItemType} from "../../model/types/cartItem";
import {Image, Text, Title} from "@vkontakte/vkui";
import {Icon16DeleteOutline} from '@vkontakte/icons';
import cls from './CartItem.module.scss'
import Counter from "@/shared/ui/Counter/Counter.tsx";
import {TheButton} from "@/shared/ui/TheButton/TheButton.tsx";
import {observer} from "mobx-react";

interface CartItemProps extends CartItemType {
    onChangeQuantity: (value: number) => void;
    onDeleteItem: () => void;
}

export const CartItem = observer((props: CartItemProps) => {
    const {
        title,
        price,
        quantity,
        thumbnail,
        onDeleteItem,
        onChangeQuantity
    } = props;

    const changeQuantityHandler = (value: number) => {
        onChangeQuantity(value)
    }

    const deleteItemHandler = () => {
        onDeleteItem()
    }

    return (
        <div className={cls.card}>
            <Image size={100} src={thumbnail}/>

            <div className={cls.card__info}>
                <Title style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                }}>
                    {title}
                </Title>

                <Text>{title}</Text>
            </div>

            <div className={cls.card__actions}>
                <div className={cls.cart__counter}>
                    <Counter value={quantity} onChange={changeQuantityHandler}/>
                </div>

                <Text
                    style={{fontSize: "30px"}}
                    weight="1"
                >
                    ${price}
                </Text>

                <div className={cls.cart__delete}>
                    <TheButton
                        onClick={deleteItemHandler}
                    >
                        <Icon16DeleteOutline/>
                    </TheButton>
                </div>
            </div>
        </div>
    )
})