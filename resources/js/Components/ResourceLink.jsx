import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';

const ResourceLink = ({ routeName, routeParams, className, children, routeMethod }) => {
    return (
        <InertiaLink
            className={className}
            href={route(routeName, routeParams)}
            method={routeMethod}
        >
            {children}
        </InertiaLink>
    )
}

export default ResourceLink;