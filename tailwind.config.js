import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'theme-primary': '#0052CC',
                'theme-secondary-1': '#002855',
                'theme-secondary-2': '#00AADD',
                'theme-secondary-3': '#91C9F6', 
                'theme-accent-1': '#006B37',
                'theme-accent-2': '#00974C',
                'theme-accent-3': '#FF5733',
                'theme-neutral-1': '#333333',
                'theme-neutral-2': '#666666',
                'theme-neutral-3': '#CCCCCC',
            },
        },
    },

    plugins: [
        forms,
    ],
};
