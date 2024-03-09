import { TheLoader } from '@/shared/ui/TheLoader/TheLoader.tsx';
import cls from './PageLoader.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <TheLoader />
    </div>
);