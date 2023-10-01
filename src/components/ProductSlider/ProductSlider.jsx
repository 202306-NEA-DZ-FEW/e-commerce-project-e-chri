import { useState, useRef, useEffect } from "react"
import ProductCard from "@/components/ProductCard/ProductCard"
import Link from "next/link"

function ProductSlider({ products }) {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  return (
    <div className="carousel my-12 mx-20">
      <div className="flex justify-between ">
        <h5 className="text-2xl leading-8 font-poppins font-bold mb-8 text-OxfordBlue dark:text-DarkWhite">
          Explore Our Latest Products
        </h5>
        <Link href="">
          <button class="bg-RedPoppy w-46 h-12 hover:bg-OxfordBlue text-base text-DarkWhite font-poppins px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400">
            View All Products
          </button>
        </Link>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="bg-RedPoppy hover:bg-gray-300 text-white w-10 h-10 my-auto rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="bg-RedPoppy hover:bg-gray-300 text-white rounded-full w-10 h-10 my-auto text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-0 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {products.products.map((product, index) => {
            return (
              <div
                key={index}
                className="carousel-item relative w-64 h-80 snap-start"
              >
                <ProductCard
                  title={product.title}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  brand={product.brand}
                  id={product.id}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
