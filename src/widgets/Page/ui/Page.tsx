import {classNames} from '@/shared/lib/classNames/classNames';
import {
    memo, ReactNode,
} from 'react';
import cls from './Page.module.scss';
import {Panel} from "@vkontakte/vkui";

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const {className, children} = props;

    return (
        <Panel
            className={classNames(cls.Page, {}, [className])}
            id="PAGE_ID"
        >
            {children}
        </Panel>
    );
});