import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"
import AllProducts from "@/components/AllProducts/AllProducts"

export default function Home(props) {
  const { theme, setTheme } = useTheme()
  // const { darkMode, toggledarkMode } = useAppcontext()

  // // useEffect(()=>{
  // //   setProduct(products)
  // // },[product])

  // function handleMode() {
  //   toggledarkMode()
  //   setTheme(darkMode ? "light" : "dark")
  // }

  console.log("index page products ", props.products)
  return (
    <main className="bg-DarkWhite  dark:bg-OxfordBlue ">
      <div className="w-20 h-20 ">
        <button className="bg-red-400">toggle</button>
      </div>

      <AllProducts products={props.products}></AllProducts>
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
