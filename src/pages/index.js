import fetcher from "@/util/API"
import { useAppcontext } from "@/context/state"
import { useTheme } from "next-themes"

export default function Home({ products }) {
  const { theme, setTheme } = useTheme()
  const { darkMode, toggledarkMode } = useAppcontext()
  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  // console.log("products", products)
  return (
    <main className="bg-DarkWhite  text-black dark:text-white p-32 dark:bg-OxfordBlue flex justify-center items-center">
      <div className="w-20 h-20">
        <button onClick={handleMode} className="bg-red-400">
          toggle
        </button>
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
