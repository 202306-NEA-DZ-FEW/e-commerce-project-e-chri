import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import Categories from "@/components/Categories/Categories"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode } = useAppcontext()
  function handleMode() {
    toggledarkMode()
    darkMode ? setTheme("light") : setTheme("dark")
  }
  console.log("products", products)
  return (
    <main className="bg-yellow-100 p-32 dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
      </div>
      <Categories categories={categories} />
      <AllProducts products={products} />
    </main>
  )
}

export async function getServerSideProps() {
  const url = "products"
  try {
    const products = await fetcher(url)
    const categories = await fetcher("products/categories")
    return {
      props: { products, categories },
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
