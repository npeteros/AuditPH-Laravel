import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ auth, goals, budgets }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        budget_type_id: 0,
        goal_id: 0,
        amount: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('transactions.store'), { onSuccess: () => reset() });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Transactions" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-4">

                        <div className="text-lg font-bold text-center text-gray-900 dark:text-white mb-4">Create a Transaction</div>

                        <div className="mx-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set transaction name</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
                                type="text"
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Set the transaction's name" 
                            />
                            <label htmlFor="budget_type_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an expense</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
                                value={data.budget_type_id}
                                onChange={e => setData('budget_type_id', e.target.value)}
                            >
                                <option selected value={0}>Choose an expense</option>
                                {
                                    budgets.map(budget => (
                                        <option key={budget.id} value={budget.id}>
                                            {budget.name}
                                        </option>
                                    ))
                                }
                            </select>

                            <label htmlFor="budget_type_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select aligned goal (optional)</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
                                value={data.goal_id}
                                onChange={e => setData('goal_id', e.target.value)}
                            >
                                <option selected value={0}>Choose a goal (optional)</option>
                                {
                                    goals.map(goal => (
                                        <option key={goal.id} value={goal.id}>
                                            {goal.goal}
                                        </option>
                                    ))

                                }
                            </select>

                            <label htmlFor="budget_total" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set the transaction's amount</label>
                            <div className="flex h-fit items-center">
                                <span className="font-bold text-gray-900 dark:text-white -ml-4 mr-2">&#36;</span>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-theme-secondary-2 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-white placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="number"
                                    onChange={e => setData('amount', e.target.value)}
                                    min={1}
                                    placeholder="Set the transaction's amount"
                                />
                            </div>

                            <InputError message={errors.name} className="mt-2" />
                            <InputError message={errors.budget_type_id} className="mt-2" />
                            <InputError message={errors.goal_id} className="mt-2" />
                            <InputError message={errors.amount} className="mt-2" />
                    
                            <PrimaryButton 
                                disabled={processing}
                                className="mt-8 mb-6 bg-theme-secondary-2 dark:bg-neutral-800 hover:bg-theme-secondary-3 w-full"
                            >
                                <span className="mx-auto text-gray-900 dark:text-white">Create Budget</span>
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>


        </AuthenticatedLayout>
    );
}

export default Create;