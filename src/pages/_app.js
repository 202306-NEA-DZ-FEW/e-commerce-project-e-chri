import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { AppWrapper } from "@/context/state"
import Navbar from "@/components/Navbar/Navbar"

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </AppWrapper>
  )
}
