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
    setTheme(darkMode ? "light" : "dark")
  }
  // console.log("products", products)
  return (
    <main className="bg-yellow-100  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
      </div>
      <Categories />
      <AllProducts products={products} />
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
