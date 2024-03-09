import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TheLoader.module.scss';

interface LoaderProps {
    className?: string;
}

export const TheLoader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);