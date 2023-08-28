import React from "react";

const Goal = ({ goal }) => {
    return (
        <div className=" bg-white shadow-sm rounded-3xl w-full">
            <div className="p-6">
                <div className="flex justify-between my-1">
                    <span className="text-base font-medium text-blue-700 dark:text-black">
                        {goal.goal}
                    </span>
                    <span className="text-sm font-medium text-blue-700 dark:text-black">
                        {parseFloat((((goal.current) / (goal.target)) * 100)).toFixed()} %
                    </span>
                </div>
                <div className="mt-4">
                    <p className="text-sm font-medium text-blue-700 dark:text-black mb-3 text-justify">
                        &#36; {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                        <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: `${(goal.current / goal.target) * 100}%` }} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Goal;