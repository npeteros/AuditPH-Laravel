import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ResourceLink from "@/Components/ResourceLink";

const Show = ({ auth, goal }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-200 dark:text-gray-200 leading-tight">{goal.goal}</h2>}
        >
            <Head title={"Goals | " + goal.goal} />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div
                    className="bg-white shadow-sm rounded-3xl w-full">
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
                <div className="mt-6 flex items-center text-center">
                    <ResourceLink
                        routeName="goals.edit"
                        routeParams={{ id: goal.id }}
                        className=" bg-green-300 shadow-sm rounded-3xl w-full p-4 mr-3"
                        routeMethod="get"
                    >
                        Edit Goal
                    </ResourceLink>
                    <ResourceLink
                        routeName="goals.destroy"
                        routeParams={{ id: goal.id }}
                        className="bg-red-300 shadow-sm rounded-3xl w-full p-4"
                        routeMethod="delete"
                    >
                        Delete Goal
                    </ResourceLink>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;