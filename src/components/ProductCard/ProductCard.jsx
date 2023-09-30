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
      // fetchUserCart(userId)
      // Fetch the user's cart data
      const userId = auth?.currentUser?.uid
      const userCartData = await fetchUserCart(userId)
      console.log("the fetch result", userCartData)
      // Update the user's cart in Firestore
      updateFirestoreCart(userId, userCartData)
      addToCart(product)
    } else {
      alert("Log in")
    }
  }


  return (
    <div class="w-64 h-80 p-4 bg-DarkWhite dark:bg-EnglishViolet rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out group">
      <div className="relative">
        <img
          class="w-full h-40  rounded-t-lg object-fill group-hover:object-cover transition-all ease-in-out duration-500"
          src={thumbnail}
          alt={title}
        />
        <Link
          href={`../products/${id}`}
          className="overflow-hidden absolute text-xl font-semibold flex justify-center items-center left-0 top-0 w-0 h-0 bg-[rgba(255,255,255,.1)] backdrop-blur-sm backdrop-filter bg-opacity-50 text-center  text-RedPoppy group-hover:w-full group-hover:h-full"
        >
          {/* <button
              title="Add New"
              class="group cursor-pointer active:scale-100 duration-200"
            > */}
          View more!
          {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="50px"
                viewBox="0 0 24 24"
                class="stroke-OxfordBlue fill-none group-active:fill-RedPoppy duration-200"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
                <path d="M12 16V8" stroke-width="1.5"></path>
              </svg> */}
          {/* </button> */}
        </Link>
      </div>
      <div class="p-4">
        <h2 class="text-ml font-poppins dark:text-black font-semibold">
          {title}
        </h2>
        <p class="text-[#DB4444] font-semibold">${price}</p>
        <div class="flex justify-between items-center mt-4">

          <button  onClick={handleAddToCart}
          class="bg-RedPoppy w-full hover:bg-OxfordBlue text-xs text-DarkWhite font-poppins px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">

            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}
