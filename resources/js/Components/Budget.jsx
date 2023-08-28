import React from 'react';
import DynamicComponentRenderer from './DynamicComponentRenderer';

export default function Budget({ budget }) {

    return (
        <div className="my-3 bg-white shadow-sm rounded-3xl p-6">
            <div className="flex">
                <div className='rounded-full w-fit p-3 mr-3' style={{ backgroundColor: budget.budget_type_color }}>
                    <DynamicComponentRenderer componentName={budget.budget_type_name} />
                </div>

                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-start">
                            <span className="text-base font-medium text-black">
                                {budget.budget_type_name}
                            </span>
                        </div>
                        <span className="text-sm font-medium text-black">
                            &#36; {budget.budget_current.toLocaleString()} / {budget.budget_total.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                            <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: `${(budget.budget_current / budget.budget_total) * 100}%` }} />
                        </div>
                        <span className="text-sm font-medium text-black">
                            {parseFloat((((budget.budget_current) / (budget.budget_total)) * 100)).toFixed()} %
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}