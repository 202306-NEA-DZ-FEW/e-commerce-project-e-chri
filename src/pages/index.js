import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart"
import { useEffect } from "react"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode, isShoppingCartOpen } = useAppcontext()
  useEffect(() => {
    setTheme(darkMode ? "light" : "dark")
  }, [darkMode])

  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
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
