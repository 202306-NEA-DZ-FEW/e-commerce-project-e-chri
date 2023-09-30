import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart"
import Slider from "@/components/Slider/Slider"
import { useEffect } from "react"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode, isShoppingCartOpen } = useAppcontext()

  const images = [
    "https://tinyurl.com/Echeri",
    "https://tinyurl.com/Echeri2",
    "https://tinyurl.com/Echeri3",
  ]

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  ;[darkMode]

  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
      </div>
      <Slider images={images} />
      <AllProducts products={products} />
      {isShoppingCartOpen && <ShoppingCart />}
    </main>
  )
}

export async function getServerSideProps() {
  const url = ""
  try {
    const products = await fetcher(url)
    return {
      props: { products },
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
