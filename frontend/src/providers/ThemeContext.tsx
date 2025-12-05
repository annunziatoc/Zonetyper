import {createContext, useContext, useEffect, useState, type ReactNode} from "react";

interface ThemeContextType {
    toggleTheme: () => void;
    darkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {
    },
    darkMode: true
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved ? saved === 'dark' : true
    })


    const toggleTheme = () => {
        setDarkMode((mode) => !mode)
    }

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])


    return (
        <ThemeContext.Provider value={{toggleTheme, darkMode}}>
            {children}</ThemeContext.Provider>
    )
}



