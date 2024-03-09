import { classNames } from '@/shared/lib/classNames/classNames';
import { TheButton } from '@/shared/ui/TheButton/TheButton.tsx';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>Some error occurred. Try it later!</p>

            <TheButton onClick={reloadPage}>
                Reload Page
            </TheButton>
        </div>
    );
};