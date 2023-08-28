import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0  bg-theme-primary dark:bg-neutral-800 bgcover">
            <div>
                <Link href="/">
                    <ApplicationLogo className="text-gray-500 w-1/3 mx-auto" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg dark:bg-neutral-800 text-white">
                {children}
            </div>
        </div>
    );
}
