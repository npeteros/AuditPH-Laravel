import ApplicationIcon from '@/Components/ApplicationLogo';
import DarkModeToggle from '@/Components/DarkModeToggle';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>

            <Head title="Welcome" />
            <div className="relative sm:flex justify-center items-center min-h-screen bg-center bg-theme-primary dark:bg-neutral-800 bgcover">
                <div className="sm:fixed w-screen h-20 sm:top-0 border-2 border-transparent border-b-neutral-200 dark:border-b-black  bg-theme-primary dark:bg-neutral-800 dark:border-transparent dark:border-2 dark:border-b-gray-500">
                    <div className="fixed top-0 right-0 p-6 w-fit text-right mt-1">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-neutral-200 hover:text-neutral-400 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>


                <div className="max-w-2xl md:max-w-4xl lg:max-w-2xl text-center italic font-sans mt-12">
                    <ApplicationIcon className='mx-auto p-3 w-4/6 sm:w-1/2' />
                    <p className='mt-6 text-white text-4xl lg:text-6xl md:text-7xl  leading-snug'>Manage your finances easily</p>

                    <div className="sm:mt-12 mt-6">
                        <Link href={route('dashboard')} method='get' as='button' type='button' className='bg-white py-2 px-10 md:py-6 md:px-16 lg:py-3 lg:px-12 rounded-full'>
                            <p className="text-center text-2xl md:text-5xl lg:text-2xl tracking-wider text-black">Get Started</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
