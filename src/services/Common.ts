
export const API_URL = process.env.REACT_APP_API_URL;

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export const getLocalTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setThemeStyles(Theme.Dark)
        return Theme.Dark;
    } else {
        setThemeStyles(Theme.Light)
        return Theme.Light;
    }
}

export const setThemeStyles = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === Theme.Dark) {
        root.classList.add('dark');
        root.style.setProperty('color-scheme', 'dark');
    }
    else {
        root.classList.remove('dark');
        root.style.setProperty('color-scheme', 'light');
    }
}

