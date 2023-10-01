import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import { useState } from "react"
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay"

export default function Home({ products }) {
  const { theme, setTheme } = useTheme()
  const [all_products, setAllProducts] = useState(products.products)
  const { darkMode, toggledarkMode } = useAppcontext()

  // // useEffect(()=>{
  // //   setProduct(products)
  // // },[product])

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }

  console.log("index page products ", all_products)
  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button className="bg-red-400">toggle</button>
      </div>
      <ProductDisplay productsProp={products.products}></ProductDisplay>
      {/* <AllProducts
        products={all_products}
        setProducts={setAllProducts}
      ></AllProducts> */}
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
