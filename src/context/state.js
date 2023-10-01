import { createContext, useContext, useState } from "react"
import { categories } from "./data"
import { useTheme } from "next-themes"

const AppContext = createContext()

export function AppWrapper({ children }) {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [products, setProducts] = useState([])

  function toggledarkMode() {
    console.log("darkmode", darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggledarkMode,
        categories,
        isLogged,
        setIsLogged,
        setTheme,
        theme,
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export function useAppcontext() {
  return useContext(AppContext)
}
