import React, { useState } from "react"
import Link from "next/link"
import {
  FiSearch,
  FiShoppingCart,
  FiAlignJustify,
  FiUser,
} from "react-icons/fi"
import { useAppcontext } from "@/context/state"
import ToggleBtn from "./toggleBtn"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { signOut } from "firebase/auth"
import { auth } from "@/util/firebase"
import LogOut from "./LogOut"
import Image from "next/image"
import logo from "../../images/logoo.png"
import SmNavBar from "./SmNavBar"

function Navbar({}) {
  const { theme, setTheme } = useTheme()
  const [wideBar, setWideBar] = useState(false)
  const [smNav, setSmNav] = useState(false)
  const {
    categories,
    isLogged,
    setIsLogged,
    darkMode,
    toggledarkMode,
    authChange,
    isShoppingCartOpen,
    setIsShoppingCartOpen,
  } = useAppcontext()
  const router = useRouter()

  function handleMode() {
    toggledarkMode()
    setTheme(darkMode ? "light" : "dark")
  }
  async function handleSearch(e) {
    e.preventDefault()
    router.push(`/Search?query=${e.target[0].value}`)
    e.target[0].value = ""
  }
  function handleLogOut() {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully")
        authChange()
      })
      .catch((error) => {
        console.error("Error signing out:", error)
      })
  }
  const logBtn = isLogged ? (
    <div className="text-2xl font-bold flex flex-row w-fit p-4 gap-10">
      {/* <FiUser onClick={handleLogOut} /> */}
      <LogOut signOut={handleLogOut} />
      <FiShoppingCart
        onClick={() => setIsShoppingCartOpen(!isShoppingCartOpen)}
        className="text-lg font-semibold w-8 h-8"
      />
    </div>
  ) : (
    <Link
      // onClick={() => setIsLogged(!isLogged)}
      href={"/login"}
      className="bg-RedPoppy text-white dark:text-white rounded-lg w-fit h-fit px-4 py-2 font-bold text-lg"
    >
      Login
    </Link>
  )
  return (
    <nav className="bg-[#F7F7FC] dark:bg-[#4E4B66] w-full h-32 px-5 py-2 flex items-center">
      <div className="lg:flex flex-col w-full gap-7 hidden ">
        <div
          className='md:flex flex-row items-center w-full justify-around relative after:content:"" after:h-px after:w-11/12 after:absolute after:bg-OxfordBlue 
            after:dark:bg-DarkWhite after:-bottom-3 sm:items-end '
        >
          <Link href={"/"} className="px-4 py-2 text-3xl font-black">
            {/* E-CHRI{" "} */}
            <Image src={logo} width={200} height={200} alt="Logo-Echri" />
          </Link>
          <div className="flex flex-row items-center w-full px-4 relative ">
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
                className={`${wideBar ? "" : "hidden"} 
                h-10 w-3/4 pl-12 bg-[#EFF0F6] dark:bg-[#A0A3BD] dark:text-DarkWhite rounded-l-full dark:placeholder:text-DarkWhite`}
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
          <div className="lg:w-1/3 flex items-center justify-around w-full ">
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
        <div className="w-full hiddenclear lg:flex flex-row justify-around">
          {categories.map((cat) => (
            <span key={cat} className="text-base font-medium">
              <Link
                className="hover:border-b border-b-[#1E4445] hover:text-RedPoppy"
                href={`/categories/${cat}`}
              >
                {cat}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col lg:hidden w-full h-full items-center justify-around`}
      >
        <div
          className={`${
            !smNav ? "flex" : "hidden"
          } w-full h-full flex-row justify-between items-center`}
        >
          <Image src={logo} width={100} height={100} alt="Logo-Echri" />
          <ToggleBtn toggle={handleMode} />
          <FiAlignJustify
            className="font-bold text-4xl dark:text-white text-OxfordBlue"
            onClick={() => setSmNav(true)}
          />
        </div>
        <SmNavBar
          isShoppingCartOpen={isShoppingCartOpen}
          setIsShoppingCartOpen={setIsShoppingCartOpen}
          handleLogOut={handleLogOut}
          isLogged={isLogged}
          smNav={smNav}
          setSmNav={setSmNav}
          handleSearch={handleSearch}
        />
      </div>
    </nav>
  )
}

export default Navbar
