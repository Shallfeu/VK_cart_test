import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Navbar.module.scss';
import AppLink from "@/shared/ui/AppLink/AppLink.tsx";
import {routes} from "@/shared/config/routeConfig/routesForNavbar.ts";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {
                routes.map(({to, title}) => (
                    <AppLink
                        key={to}
                        to={to}
                        className={cls.links}
                    >
                        {title}
                    </AppLink>
                ))
            }
        </header>
    );
});