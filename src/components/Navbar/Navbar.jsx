import React, { useState } from "react"
import Link from "next/link"
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"
import { useAppcontext } from "@/context/state"
import ToggleBtn from "./toggleBtn"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"

function Navbar({}) {
  const { theme, setTheme } = useTheme()
  const [wideBar, setWideBar] = useState(false)
  const {
    categories,
    isLogged,
    setIsLogged,
    darkMode,
    toggledarkMode,
    isShoppingCartOpen,
    setIsShoppingCartOpen,
  } = useAppcontext()
  const router = useRouter()

  function handleMode() {
    console.log("handled", darkMode)
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  async function handleSearch(e) {
    e.preventDefault()
    router.push(`/Search?query=${e.target[0].value}`)
    e.target[0].value = ""
  }
  const logBtn = isLogged ? (
    <div className="text-2xl font-bold flex flex-row w-fit p-4 gap-10">
      <FiUser onClick={() => setIsLogged(!isLogged)} />
      <FiShoppingCart
        onClick={() => setIsShoppingCartOpen(!isShoppingCartOpen)}
        className="text-lg font-semibold w-8 h-8"
      />
    </div>
  ) : (
    <button
      onClick={() => setIsLogged(!isLogged)}
      className="bg-RedPoppy text-white dark:text-white rounded-lg w-fit h-fit px-4 py-2 font-bold text-lg"
    >
      Login
    </button>
  )
  return (
    <nav className="bg-[#F7F7FC] dark:bg-[#4E4B66] w-full h-32 px-5 py-2 flex items-center">
      <div className="flex flex-col w-full gap-7 ">
        <div
          className='hidden md:flex flex-row items-center w-full justify-around relative after:content:"" after:h-px after:w-11/12 after:absolute after:bg-OxfordBlue 
            after:dark:bg-DarkWhite after:-bottom-3 '
        >
          <Link href={"/"} className="w-1/5 px-4 py-2 text-3xl font-black">
            E-CHRI{" "}
          </Link>
          <div className="flex flex-row items-center w-full px-4 relative">
            <form
              action=""
              onSubmit={handleSearch}
              className={`${
                wideBar ? "w-full" : "w-0"
              } flex justify-center pl-2 h-12 overflow-hidden ease-out transition-all duration-1000`}
            >
              <input
                type="search"
                id="searchBar"
                name="searchBar"
                placeholder="What's in your mind...?"
                className="h-10 w-3/4 pl-12 bg-[#EFF0F6] dark:bg-[#A0A3BD] rounded-l-full"
              />
              <input
                type="submit"
                name="searchProduct"
                id="searchProduct"
                value="Search"
                className="bg-RedPoppy h-10  text-white rounded-r-full w-1/4"
              />
            </form>
          </div>
          <div className="w-1/3 flex items-center justify-around">
            <button
              onClick={() => setWideBar(!wideBar)}
              className="text-lg font-semibold w-8 h-8 "
            >
              <FiSearch />
            </button>
            {logBtn}

            <ToggleBtn toggle={handleMode} />
          </div>
        </div>
        <div className="w-full flex flex-row justify-around">
          {categories.map((cat) => (
            <span key={cat} className="text-base font-medium">
              <Link
                className="hover:border-b border-b-[#1E4445] hover:text-RedPoppy"
                href={`./categories/${cat}`}
              >
                {cat}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div className="flex md:hidden"></div>
    </nav>
  )
}

export default Navbar
