import React from "react";

import { Theme } from "../services/Common";


export const ThemeContext = React.createContext({
    theme: Theme.Dark,
    setTheme: (theme: Theme) => {theme},
});
