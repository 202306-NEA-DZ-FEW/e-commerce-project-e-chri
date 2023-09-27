import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { AppWrapper } from "@/context/state"

export default function App({ Component, pageProps }) {
  // const {darkMode}= useAppcontext()
  return (
    <AppWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  )
}
