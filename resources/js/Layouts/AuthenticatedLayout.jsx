import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import DarkModeToggle from '@/Components/DarkModeToggle';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-theme-primary dark:bg-neutral-800 bgcover">
            <nav className="border-b border-gray-100  bg-theme-primary dark:bg-neutral-800">
                <div className="max-w-sm md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="w-16" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')} className='text-neutral-300 hover:text-neutral-200 dark:text-slate-100'>
                                    Dashboard
                                </NavLink>
                                <NavLink href={route('goals.index')} active={route().current('goals.index')} className=' text-neutral-300 hover:text-neutral-200 dark:text-slate-100'>
                                    Goals
                                </NavLink>
                                <NavLink href={route('budgets.index')} active={route().current('budgets.index')} className=' text-neutral-300 hover:text-neutral-200 dark:text-slate-100'>
                                    Budgets
                                </NavLink>
                                <NavLink href={route('transactions.index')} active={route().current('transactions.index')} className=' text-neutral-300 hover:text-neutral-200 dark:text-slate-100'>
                                    Transactions
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-neutral-200 hover:text-neutral-400 focus:outline-none transition ease-in-out duration-150 bg-theme-secondary-1 dark:bg-neutral-600"
                                            >
                                                {user.name}


                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-600 focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden max-w-sm md:max-w-md lg:max-w-7xl'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')} className=' dark:text-slate-100'>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('goals.index')} active={route().current('goals.index')} className=' dark:text-slate-100'>
                            Goals
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('budgets.index')} active={route().current('budgets.index')} className=' dark:text-slate-100'>
                            Budgets
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('transactions.index')} active={route().current('transactions.index')} className=' dark:text-slate-100'>
                            Transactions
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-white">{user.name}</div>
                            <div className="font-medium text-sm text-gray-300">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')} className='text-white'>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} className='text-white' as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="shadow  bg-theme-secondary-1 dark:bg-neutral-700">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            {/* <DarkModeToggle /> */}
        </div>
    );
}
