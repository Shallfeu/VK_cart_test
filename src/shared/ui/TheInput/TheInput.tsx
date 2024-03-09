import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes
} from 'react';
import cls from './TheInput.module.scss';
// import {Input} from "@vkontakte/vkui";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const TheInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
    };

    const onBlur = () => {
    };

    const onFocus = () => {
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <input
            value={value}
            onChange={onChangeHandler}
            ref={ref}
            type={type}
            className={classNames(cls.input, mods, [className])}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            readOnly={readonly}
            {...otherProps}
        />
        // <Input
        //     ref={ref}
        //     type={type}
        //     value={value}
        //     className={classNames(cls.input, mods, [className])}
        //     onFocus={onFocus}
        //     onBlur={onBlur}
        //     placeholder={placeholder}
        //     readOnly={readonly}
        //     {...otherProps}
        // />
    )
});