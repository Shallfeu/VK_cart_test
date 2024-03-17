import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TheLoader.module.scss';
import {Spinner} from "@vkontakte/vkui";

interface LoaderProps {
    className?: string;
}

export const TheLoader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <Spinner size="large" />
    </div>
);