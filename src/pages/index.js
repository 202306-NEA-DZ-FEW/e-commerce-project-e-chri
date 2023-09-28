import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode, isShoppingCartOpen } = useAppcontext()

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }

  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
      </div>
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
