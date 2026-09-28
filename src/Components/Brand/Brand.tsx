import type { ReactNode } from "react";

interface BrandProps {
    name: string;
    icon?: ReactNode;
    className?: string;
}

/** Identidad visual reutilizable para el nombre e ícono del evento. */
export function Brand({ name, icon, className = "" }: BrandProps) {
    return (
        <span className={`brand ${className}`.trim()}>
            {icon && (
                <span className="brand__icon" aria-hidden="true">
                    {icon}
                </span>
            )}
            <span className="brand__name">{name}</span>
        </span>
    );
}
