import { useContext } from "react";

import NamedIcon from "./NamedIcon";
import { ThemeContext } from "../contexts/ThemeContext";
import { Theme, setThemeStyles } from "../services/Common";


const ThemeChooser = () => {

    const {theme, setTheme} = useContext(ThemeContext);

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
        setThemeStyles(newTheme);
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
