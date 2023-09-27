import React from "react"
import Link from "next/link"

export default function Categories({ categories }) {
  return (
    <>
      <div>
        <h1 className="font-bold font-poppins text-2xl ml-24">
          Browse By Category
        </h1>
        <ul className="flex justify-center space-x-4">
          {categories.map((option) => (
            <div
              key={option}
              class="flex relative items-center justify-center "
            >
              <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
                <div class="group-hover:pb-10 transition-all duration-500 delay-200">
                  <h1 class="font-semibold text-gray-700">{option}</h1>
                </div>
                <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                  <Link href={`./categories/${option}`}>
                    <button class="bg-RedPoppy hover:bg-OxfordBlue text-xs text-DarkWhite font-poppins px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* <div key={option} class="flex relative items-center justify-center ">
  <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 group-hover:scale-105 transition-all">
      <svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg>
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
      <h1 class="font-semibold text-gray-700">{option}</h1>
    </div>
    <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
    <Link href={`./categories/${option}`}><button class="bg-RedPoppy hover:bg-OxfordBlue text-xs text-DarkWhite font-poppins px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Shop</button></Link>
    </div>
  </div>
</div> */}

      {/* <div>
      <h1 className="font-bold text-2xl ml-24">Browse By Category</h1>
      <ul className="flex justify-center space-x-4">
        {categories.map((option) => (
          <li
            key={option}
            className="flex flex-row mt-10 ml-10 hover:text-[#DB4444] active text-base"
          >
            <Link href={`./categories/${option}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </div> */}
    </>
  )
}
