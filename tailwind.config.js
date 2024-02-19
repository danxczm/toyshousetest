/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {},
        screens: {
            lg: '1140px',
            md: '768px',
            sm: '375px',
        },
    },
    plugins: [],
};
