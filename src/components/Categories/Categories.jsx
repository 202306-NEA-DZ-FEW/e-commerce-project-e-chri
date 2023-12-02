import React from "react"
import Link from "next/link"
import { categories } from "@/context/data"

export default function Categories({}) {
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
              className="flex relative items-center justify-center "
            >
              <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
                <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                  <h1 className="font-semibold text-gray-700">{option}</h1>
                </div>
                <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                  <Link href={`./categories/${option}`}>
                    <button className="bg-RedPoppy hover:bg-OxfordBlue text-xs text-DarkWhite font-poppins px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

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
