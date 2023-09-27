import React from "react"
import Link from "next/link"

export default function Categories({ categories }) {
  return (
    <div>
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
    </div>
  )
}
