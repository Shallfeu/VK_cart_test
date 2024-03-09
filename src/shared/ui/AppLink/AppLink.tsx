import cls from "@/widgets/Navbar/ui/Navbar.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {ReactNode} from "react";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink