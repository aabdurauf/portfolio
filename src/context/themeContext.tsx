import React, { useCallback, useContext, useEffect, useState } from "react";
import { getTheme, saveTheme } from "../utils/helper";

const context = React.createContext({
  theme: "",
  checkSystemTheme: () => { },
  setTheme: (_newTheme: string) => { },
})

interface Props {
  children: React.ReactNode;
}

const initialTheme = getTheme();

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(initialTheme)

  const checkSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark")
    } else {
      setTheme("Light")
    }
  }

  const checkTheme = useCallback(() => {
    if (initialTheme) return;
    setTheme("Dark")
  }, [])

  useEffect(() => {
    checkTheme()
  }, [checkTheme])

  useEffect(() => {
    if (theme === "Dark") {
      document.documentElement.classList.add("dark")
      saveTheme("Dark")
    } else if (theme === "Light") {
      document.documentElement.classList.remove("dark")
      saveTheme("Light")
    }
  }, [theme])

  return (
    <context.Provider
      value={{
        theme,
        setTheme,
        checkSystemTheme
      }}
    >
      {children}
    </context.Provider>
  )
}

export default ThemeProvider;

export const useTheme = () => {
  return useContext(context)
}