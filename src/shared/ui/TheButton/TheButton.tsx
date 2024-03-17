import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './TheButton.module.scss';
import {Button} from "@vkontakte/vkui";

// I made all this enums and properties for custom ui library
// don't know actually how fast adapt it to VKUI

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    // theme?: ButtonTheme;
    // size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const TheButton = memo((props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <Button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </Button>
    );
});