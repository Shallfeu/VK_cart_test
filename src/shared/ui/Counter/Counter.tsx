import cls from './Counter.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface CounterProps {
    value: number;
    onChange: (value: number) => void;
    maxCount?: number;
}

const Counter = (props: CounterProps) => {
    const {value, maxCount = 10, onChange} = props

    const decreaseHandler = () => {
        onChange(value - 1)
    }

    const increaseHandler = () => {
        onChange(value + 1)
    }

    return (
        <div className={cls.counter}>
            {
                value < maxCount && <button
                    className={classNames(cls.counter__inc, {}, [cls.counter__btn])}
                    onClick={increaseHandler}
                />
            }

            <input
                type="text"
                onChange={() => {
                }}
                value={value}
                className={cls.counter__value}
            />

            {
                value > 1 && (<button
                    className={classNames(cls.counter__dec, {}, [cls.counter__btn])}
                    onClick={decreaseHandler}
                />)
            }
        </div>
    )
}

export default Counter