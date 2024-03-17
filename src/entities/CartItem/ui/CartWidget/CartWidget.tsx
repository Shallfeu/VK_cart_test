import cls from './CartWidget.module.scss'

interface CartWidgetProps {
    itemsPrices: { id: number; total: number }[]
}

export const CartWidget = (props: CartWidgetProps) => {
    const {itemsPrices} = props;

    const totalPrice = itemsPrices.reduce((acc, item) => {
        acc += item.total
        return acc
    }, 0)

    return (
        <div className={cls.widget}>
            <div className={cls.widget__list}>
                {itemsPrices.map(item => (
                    <div key={item.id} className={cls.widget__cell}>
                        Итого по этому товару:&nbsp;<b className={cls.widget__price}>${item.total}</b>
                    </div>
                ))}
            </div>

            <div className={cls.widget__total}>
                Итого сумма:&nbsp;<b className={cls.widget__price}>${totalPrice}</b>
            </div>
        </div>
    )
}