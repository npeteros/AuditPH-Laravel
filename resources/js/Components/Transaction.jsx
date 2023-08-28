import React from 'react';
import DynamicComponentRenderer from './DynamicComponentRenderer';

export default function Transaction({ transaction }) {

    const date = new Date(transaction.created_at);

    return (
        <div className="my-3 bg-white shadow-sm rounded-3xl p-6">
            <div className="flex">
                <div className="rounded-full w-fit p-3 mr-3" style={{ backgroundColor: transaction.budget_type_color }}>
                    <DynamicComponentRenderer componentName={transaction.budget_type_name} />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-start">
                            <span className="text-base font-medium text-black font-extrabold my-1">
                                {transaction.name}
                            </span>
                        </div>
                        <span className="text-sm font-medium text-black font-extrabold my-1">
                            -&#36; {transaction.amount}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-base font-light text-black">
                            {transaction.budget_type_name}
                        </span>
                        <span className="text-sm font-light text-black">
                            {date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"})}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}