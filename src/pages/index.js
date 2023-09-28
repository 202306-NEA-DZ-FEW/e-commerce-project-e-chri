import { useState, useEffect } from "react"
import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import Filter from "@/components/Filter/Filter"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode } = useAppcontext()
  const [product, setProduct] = useState({ products })
  // useEffect(()=>{
  //   setProduct(products)
  // },[])

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  function Update_product_state(value) {
    setProduct(value)
  }
  console.log("products state", product)
  console.log("products ", products)
  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
      </div>
      <div className="flex flex-row">
        <Filter
          className=" fixed w-3"
          products={product}
          Update_product_state={Update_product_state}
        />
        <AllProducts products={product} />
      </div>
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
