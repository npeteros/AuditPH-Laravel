import React from 'react';
import BudgetMappings from './BudgetMappings';

const DynamicComponentRenderer = ({ componentName }) => {
    const ComponentToRender = BudgetMappings[componentName] || null;

    return (
        <>
            {ComponentToRender && <ComponentToRender />}
        </>
    );
};

export default DynamicComponentRenderer;