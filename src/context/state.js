import { createContext, useContext, useState } from "react"
// import { useTheme } from "next-themes";

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  // const {theme, setTheme}= useTheme()
  function toggledarkMode() {
    console.log("darkmode", darkMode)
    // setTheme('dark')
    setDarkMode(!darkMode)
  }
  return (
    <AppContext.Provider value={{ darkMode, toggledarkMode }}>
      {children}
    </AppContext.Provider>
  )
}
export function useAppcontext() {
  // const {darkMode, toggledarkMode}= useContext(AppContext)
  return useContext(AppContext)
}
