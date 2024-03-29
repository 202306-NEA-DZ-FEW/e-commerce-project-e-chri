import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart"
import Slider from "@/components/Slider/Slider"
import { useEffect } from "react"
import Link from "next/link"
import ProductSlider from "@/components/ProductSlider/ProductSlider"
import { Categories, images } from "@/context/data"
import Services from "@/components/Services/Services"
import CategoriesSlider from "@/components/CategoriesSlider/CategoriesSlider"

export default function Home({ products, categories }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode, isShoppingCartOpen } = useAppcontext()

  useEffect(() => {
    setTheme(darkMode ? "light" : "dark")
  }, [darkMode])

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  // ;[darkMode]

  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <Slider images={images} />
      <ProductSlider products={products} />
      <CategoriesSlider />
      {/* <div className="flex items-center justify-center">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-classes-study-online-from-home-banner-design-template-dfe22f6485ee61ddb60257c85e4afa9b_screen.jpg?ts=1615781771"
          alt="Banner"
          className="w-120 max-h-52 object-cover item-center"
        />
      </div> */}
      {/* {isShoppingCartOpen && <ShoppingCart />} */}
      <Services />
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
