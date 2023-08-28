import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ auth }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        budget_type_id: '',
        budget_total: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('goals.store'), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Goals" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-4">

                        <div className="text-lg font-bold text-center text-gray-900 dark:text-white mb-4">Create a Goal</div>

                        <div className="mx-6">
                            <label for="goal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set your goal</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                                type="text"
                                onChange={e => setData('goal', e.target.value)}
                                placeholder="Set the goal's name"
                            />
                            <label for="goal_total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set a target</label>
                            <div className="flex h-fit items-center">
                                <span className="font-bold text-gray-900 dark:text-white -ml-4 mr-2">&#36;</span>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="number"
                                    onChange={e => setData('target', e.target.value)}
                                    placeholder="Set the goal's total"
                                    min={1}
                                />
                            </div>

                            <InputError message={errors.goal} className="mt-2" />
                            <InputError message={errors.target} className="mt-2" />
                    
                            <PrimaryButton 
                                disabled={processing}
                                className="mt-8 mb-6 bg-theme-secondary-2 dark:bg-neutral-800 hover:bg-theme-accent-3 w-full"
                            >
                                <span className="mx-auto text-gray-900 dark:text-white">Create Goal</span>
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>


        </AuthenticatedLayout>
    );
}

export default Create;