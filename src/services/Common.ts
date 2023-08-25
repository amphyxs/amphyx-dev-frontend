
export const API_URL = process.env.REACT_APP_API_URL;

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export const getLocalTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        return Theme.Dark;
    } else {
        return Theme.Light;
    }
}
