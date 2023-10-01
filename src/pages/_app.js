import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { AppWrapper } from "@/context/state"
import Navbar from "@/components/Navbar/Navbar"
import { useTheme } from "next-themes"
import Head from "next/head"
import { useEffect } from "react"
import { useAppcontext } from "@/context/state"

export default function App({ Component, pageProps }) {
  const { theme, setTheme } = useTheme()
  // useEffect(() => {
  //   // Access localStorage only on the client side
  //   const mode= localStorage.getItem('darkMode')
  // // console.log('local storage mode', mode)
  // setTheme(mode == 'true'? 'dark': 'light')
  // console.log('local storage mode', mode, 'theme is', theme)

  // }, )

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const newTheme = storedTheme === "dark" ? "light" : "dark"
    setTheme(storedTheme || "light")
    console.log("local storage mode", storedTheme, "theme is", theme)
  }, [])

  return (
    <AppWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="bg-DarkWhite dark:bg-OxfordBlue">
          <Head>
            <title>E-chri</title>
          </Head>
          <Navbar />
          <Component
            {...pageProps}
            className="bg-DarkWhite dark:bg-OxfordBlue"
          />
        </div>
      </ThemeProvider>
    </AppWrapper>
  )
}
