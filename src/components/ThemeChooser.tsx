import { useState } from "react";
import NamedIcon from "./NamedIcon";


export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const ThemeChooser = () => {
    
    const getLocalTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            return Theme.Dark;
        } else {
            return Theme.Light;
        }
    }

    const [theme, setTheme] = useState(getLocalTheme());

    const getIconName = (theme: Theme) => {
        switch (theme) {
            case Theme.Light: {
                return 'night';
            }
            case Theme.Dark: {
                return 'day';
            }
        }
    }
    
    const updateTheme = () => {
        const newTheme = (theme === Theme.Light ? Theme.Dark : Theme.Light);
 
        if (newTheme === Theme.Dark)
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');

        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    return (
        <div
            onClick={updateTheme}
            className="w-8 h-8 hover:cursor-pointer hover:opacity-50"
        >
            <NamedIcon
                name={getIconName(theme)}
                className="text-slate-400"
            />
        </div>
    );
}

export default ThemeChooser;
