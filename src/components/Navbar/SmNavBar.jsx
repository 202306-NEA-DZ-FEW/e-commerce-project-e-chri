import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
// import { XMarkIcon } from '@heroicons/react/24/outline'
import { FiSearch, FiXSquare } from "react-icons/fi"
import Image from "next/image"
import logo from "../../images/logoo.png"
import LogOut from "./LogOut"
import Link from "next/link"
import { categories } from "@/context/data"
import { useAppcontext } from "@/context/state"

export default function SmNavBar({
  handleLogOut,
  smNav,
  setSmNav,
  handleSearch,
  isLogged,
  isShoppingCartOpen,
  setIsShoppingCartOpen,
}) {
  //   const [open, setOpen] = useState(true)
  const [openCat, setOpenCat] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const { user } = useAppcontext()
  const logBtn = isLogged ? (
    <div className="text-2xl text-OxfordBlue dark:text-white font-bold flex flex-col w-full p-4 gap-4">
      {/* <FiUser onClick={handleLogOut} /> */}
      {/* <LogOut signOut={handleLogOut} /> */}
      <span
        className="w-full h-fit p-2 border border-gray-400 shadow-md"
        onClick={() => {
          setOpenUser(!openUser)
        }}
      >
        Account
      </span>
      <div
        className={`w-full  lg:hidden clear flex flex-col justify-around overflow-hidden
        ${openUser ? "h-fit" : "h-0"} transition-all ease-in-out duration-1000`}
      >
        <span>{user.displayName || "E-chri's favourite customer"}</span>
        <span>
          <Link
            href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-chri"
            className=""
          >
            Github
          </Link>
        </span>
        <span>
          <Link href="./#footer" className="">
            About us
          </Link>
        </span>
        <span onClick={handleLogOut} type="submit" className="">
          Sign out
        </span>
      </div>
      <button
        onClick={() => {
          setIsShoppingCartOpen(!isShoppingCartOpen)
          setSmNav(false)
        }}
        className="text-lg text-OxfordBlue dark:text-white font-semibold w-8 h-8"
      >
        Cart
      </button>
    </div>
  ) : (
    <Link
      onClick={() => setSmNav(false)}
      href={"/login"}
      className="bg-RedPoppy text-white text-center dark:text-white rounded-lg w-1/2 h-fit px-4 py-2 font-bold text-lg"
    >
      Login
    </Link>
  )

  return (
    <Transition.Root show={smNav} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10  bg-DarkWhite dark:bg-OxfordBlue"
        onClose={setSmNav}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden bg-DarkWhite dark:bg-OxfordBlue">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setSmNav(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <FiXSquare className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-center mt-2 font-semibold leading-6 text-gray-900">
                        <Image
                          src={logo}
                          width={200}
                          height={200}
                          alt="Logo-Echri"
                          className="w-1/2 mx-auto"
                        />
                      </Dialog.Title>
                    </div>
                    <div className="relative flex flex-col justify-start gap-5 items-center mt-6 flex-1 px-4 sm:px-6">
                      <form
                        action=""
                        onSubmit={handleSearch}
                        className="flex flex-row items-center gap-2 justify-center overflow-hidden"
                      >
                        <input
                          type="search"
                          id="searchBar"
                          name="searchBar"
                          placeholder="What's in your mind...?"
                          className={` h-full w-full py-2 pl-12 rounded-md bg-[#EFF0F6] dark:bg-[#A0A3BD] dark:text-DarkWhite dark:placeholder:text-DarkWhite`}
                        />
                        {/* <input
                        type="submit"
                        name="searchProduct"
                        id="searchProduct"
                        value="Search"
                        className="bg-RedPoppy h-full rounded-lg text-white p-2  w-1/4"
                      /> */}
                        <button
                          type="submit"
                          className="bg-RedPoppy text-center h-full rounded-md text-white p-2  w-fit"
                        >
                          <FiSearch />
                        </button>
                      </form>
                      {logBtn}
                      <span
                        className="w-full h-fit p-2 border border-gray-400 shadow-md"
                        onClick={() => {
                          setOpenCat(!openCat)
                        }}
                      >
                        Categories
                      </span>
                      <div
                        className={`w-full  lg:hidden clear flex flex-col justify-around overflow-hidden
                        ${
                          openCat ? "h-fit" : "h-0"
                        } transition-all ease-in-out duration-1000`}
                      >
                        {categories.map((cat) => (
                          <span key={cat} className="text-base font-medium">
                            <Link
                              onClick={() => setSmNav(false)}
                              className="hover:border-b border-b-[#1E4445] hover:text-RedPoppy"
                              href={`/categories/${cat}`}
                            >
                              {cat}
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
