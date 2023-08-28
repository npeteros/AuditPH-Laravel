import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';

const DivLink = ({ routeName, className, children }) => {
    return (
        <InertiaLink
            className={className}
            href={route(routeName)}
        >
            {children}
        </InertiaLink>
    )
}

export default DivLink;