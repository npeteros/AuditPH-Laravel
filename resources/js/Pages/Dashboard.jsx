import DivLink from '@/Components/DivLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {

    const { budgetCount, goalCount, transactionCount, expenses } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-neutral-200 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="lg:py-12 sm:py-3">
                <div className="max-w-s md:max-w-7xl m-auto sm:px-6 lg:px-8 flex flex-wrap lg:flex-nowrap justify-center items-center">

                    <div className="flex flex-col justify-center items-center mx-6">

                        <DivLink
                            routeName="home"
                            className="bg-theme-secondary-1 dark:bg-neutral-700 shadow-sm sm:rounded-lg rounded-3xl w-max px-16 mx-3 my-12 py-5"
                        >
                            <div className="text-neutral-200 flex items-center">
                                <svg width="46" height="46" fill="#31c429" stroke="#000000" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                                    <path d="m12 8-4 4"></path>
                                    <path d="M12 8v8"></path>
                                    <path d="m16 12-4-4"></path>
                                </svg>
                                <span className='ml-6 text-justify'>
                                    <span>Income</span><br />
                                    <span className='text-xl font-bold'>$&nbsp;20,850</span>
                                </span>
                            </div>
                        </DivLink>

                        <DivLink
                            routeName="home"
                            className="bg-theme-secondary-1 dark:bg-neutral-700 shadow-sm sm:rounded-lg rounded-3xl w-max px-16 mx-3"
                        >
                            <div className="text-neutral-200 flex items-center">
                                <div className="py-6">
                                    <svg width="46" height="46" fill="#ff4949" stroke="#000000" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                                        <path d="m8 12 4 4"></path>
                                        <path d="M12 8v8"></path>
                                        <path d="m16 12-4 4"></path>
                                    </svg>
                                </div>
                                <span className='ml-6 text-justify'>
                                    <span>Expenses</span><br />
                                    <span className='text-xl font-bold'>$&nbsp;{expenses.toLocaleString()}</span>
                                </span>
                            </div>
                        </DivLink>
                    </div>

                    <div className="bg-theme-secondary-1 dark:bg-neutral-700 overflow-hidden shadow-sm sm:rounded-lg rounded-3xl mt-12 w-full pb-6">
                        <div className="mx-6 mt-6 mb-3 text-neutral-200 text-lg font-bold">Statistics</div>

                        <div className="grid grid-cols-4 gap-4 mx-6">
                            <DivLink
                                routeName="goals.index"
                                className="col-span-2 shadow-2xl bg-neutral-200 rounded-md pb-4">
                                <div className="flex justify-between">
                                    <div className="bg-[#fdb462] rounded-full p-2 m-4">
                                        <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5v16"></path>
                                            <path d="M19 5v9"></path>
                                            <path d="M5 5a5 5 0 0 1 7 0 5 5 0 0 0 7 0"></path>
                                            <path d="M5 14a5 5 0 0 1 7 0 5 5 0 0 0 7 0"></path>
                                        </svg>
                                    </div>
                                    <span className='p-2 m-4 font-bold'>{goalCount}</span>
                                </div>
                                <span className="p-2 m-2 text-base">Goals</span>
                            </DivLink>

                            <DivLink
                                routeName="budgets.index"
                                className="col-span-2 shadow-2xl bg-neutral-200 rounded-md pb-4">
                                <div className="flex justify-between">
                                    <div className="bg-[#bbe27a] rounded-full p-2 m-4">
                                        <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 16v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6"></path>
                                            <path d="M6 8h12a1 1 0 0 1 1 1v3"></path>
                                            <path d="M20 12v4h-4a2 2 0 0 1 0-4h4Z"></path>
                                            <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 1 0 0 4"></path>
                                        </svg>
                                    </div>
                                    <span className='p-2 m-4 font-bold'>{budgetCount}</span>
                                </div>
                                <span className="p-2 m-2 text-base">Budgets</span>
                            </DivLink>

                            <div
                                className="col-span-2 shadow-2xl bg-neutral-200 rounded-md pb-4">
                                <div className="flex justify-between">
                                    <div className="bg-[#fe5858] rounded-full p-2 m-4">
                                        <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 1 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2"></path>
                                            <path d="M12 18v3m0-18v3-3Z"></path>
                                        </svg>
                                    </div>
                                    <span className='p-2 m-4 font-bold'>35%</span>
                                </div>
                                <span className="p-2 m-2 text-base">Money Saved</span>
                            </div>

                            <DivLink
                                routeName="transactions.index"
                                className="col-span-2 shadow-2xl bg-neutral-200 rounded-md pb-4">
                                <div className="flex justify-between">
                                    <div className="bg-[#8dd3c7] rounded-full p-2 m-4">
                                        <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m7 10 5-6 5 6"></path>
                                            <path d="m21 10-2 8c-.093.573-.345 1.087-.71 1.453-.366.365-.822.559-1.29.547H7c-.468.012-.924-.182-1.29-.547-.365-.366-.617-.88-.71-1.453l-2-8h18Z"></path>
                                            <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                                        </svg>
                                    </div>
                                    <span className='p-2 m-4 font-bold'>{transactionCount}</span>
                                </div>
                                <span className="p-2 m-2 text-base">Transactions</span>
                            </DivLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
