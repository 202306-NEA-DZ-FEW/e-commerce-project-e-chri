import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"

export default function AllProducts({
  products,
  rating_value,
  price_value,
  category_value,
  search_value,
}) {
  const displayed = products.products.filter((pro) => {
    // console.log(
    //   "test displayed",
    //   pro["title"],
    //   pro["title"].includes(search_value),
    // )
    // console.log("search ", search_value)
    if (
      rating_value === 0 &&
      price_value === 2500 &&
      search_value === ""
      // && category_value === "All"
    )
      return true
    else
      return (
        pro.rating > rating_value &&
        pro.price < price_value &&
        pro["title"].includes(search_value)
        // &&
        // pro.category === category_value
      )
  })
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = displayed.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.products.length / productsPerPage)

  // Create an array of page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl font-poppins ml-20">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
        {currentProducts.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-RedPoppy text-white rounded-full hover:bg-gray-300"
        >
          <HiArrowLeft />
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`px-4 py-2 mx-2 rounded-full  ${
              currentPage === pageNumber
                ? "bg-RedPoppy text-white"
                : "bg-white dark:bg-EnglishViolet text-EnglishViolet dark:text-white shadow hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastProduct >= products.length}
          className="px-4 py-2 rounded-full bg-RedPoppy text-white hover:bg-gray-300"
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  )
}
