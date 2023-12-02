import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { AppWrapper } from "@/context/state"
import Navbar from "@/components/Navbar/Navbar"
import Head from "next/head"
import Footer from "@/components/Footer/Footer"

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="bg-DarkWhite dark:bg-OxfordBlue">
          <Head>
            <title>E-chri Shopping</title>
          </Head>
          <Navbar />
          <Component
            {...pageProps}
            className="bg-DarkWhite dark:bg-OxfordBlue"
          />
          <Footer />
        </div>
      </ThemeProvider>
    </AppWrapper>
  )
}
