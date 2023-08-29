import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Edit = ({ auth, goal }) => {

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        goal: goal.goal,
        current: goal.current,
        target: goal.target
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('goals.update', goal.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-200 dark:text-gray-200 leading-tight">{goal.goal}</h2>}
        >
            <Head title={"Goals | " + goal.goal} />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-4">

                        <div className="text-lg font-bold text-center text-gray-900 dark:text-white mb-4">Edit Goal</div>

                        <div className="mx-6">
                            <label for="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set your goal</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                                type="text"
                                value={data.goal}
                                onChange={e => setData('goal', e.target.value)}
                                placeholder="Set the goal's name"
                            />
                            <label for="goal current" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set current progress</label>
                            <div className="flex h-fit items-center">
                                <span className="font-bold text-gray-900 dark:text-white -ml-4 mr-2">&#36;</span>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                                    type="number"
                                    value={data.current}
                                    onChange={e => setData('current', e.target.value)}
                                    placeholder="Set the goal's current progress"
                                    min={1}
                                />
                            </div>
                            <label for="goal_total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set a target</label>
                            <div className="flex h-fit items-center">
                                <span className="font-bold text-gray-900 dark:text-white -ml-4 mr-2">&#36;</span>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="number"
                                    value={data.target}
                                    onChange={e => setData('target', e.target.value)}
                                    placeholder="Set the goal's total"
                                    min={1}
                                />
                            </div>

                            <InputError message={errors.goal} className="mt-2" />
                            <InputError message={errors.current} className="mt-2" />
                            <InputError message={errors.target} className="mt-2" />

                            <div className="flex">
                                <PrimaryButton
                                    className="mt-8 mr-2 bg-theme-secondary-2 dark:bg-green-950 hover:bg-theme-accent-3 w-1/2"
                                >
                                    <span className="mx-auto text-gray-900 dark:text-white">Save Goal</span>
                                </PrimaryButton>
                                <PrimaryButton
                                    className="mt-8 bg-theme-secondary-2 dark:bg-red-950 hover:bg-theme-accent-3 w-1/2"
                                    onClick={() => { reset(); clearErrors(); }}
                                >
                                    <span className="mx-auto text-gray-900 dark:text-white">Cancel</span>
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit;