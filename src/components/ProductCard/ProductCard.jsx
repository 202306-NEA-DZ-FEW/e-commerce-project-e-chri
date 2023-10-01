import Link from "next/link"
import React from "react"
import { useAppcontext } from "@/context/state"
import { fetchUserCart } from "@/util/firebase"
import { auth } from "@/util/firebase"
import { updateFirestoreCart } from "@/util/firebase"

export default function ProductCard({ title, price, thumbnail, brand, id }) {
  const { addToCart, isLogged } = useAppcontext()

  const product = {
    title,
    brand,
    price,
    thumbnail,
    id,
    quantity: 1,
  }

  const handleAddToCart = async () => {
    if (isLogged) {
      const userId = auth?.currentUser?.uid
      const userCartData = await fetchUserCart(userId)

      updateFirestoreCart(userId, userCartData)
      addToCart(product)
    } else {
      alert("Log in")
    }
  }

  return (
    <div className="w-64 h-80 p-4 bg-transparent rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out group">
      <div className="relative">
        <Link href={`../products/${id}`}>
          <img
            className="w-full h-52 object-cover bg-transparent"
            src={thumbnail}
            alt={title}
          />
        </Link>
        <div className="absolute top-2 right-2">
          <button
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 bg-RedPoppy text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link href={`../products/${id}`}>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline">
            {title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300">${price}</p>
      </div>
    </div>
  )
}
