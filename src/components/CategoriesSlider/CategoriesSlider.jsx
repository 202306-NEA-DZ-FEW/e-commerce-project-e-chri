import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { categoriesImgs } from "@/context/data"

function CategoriesSlider() {
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
      <div className="relative overflow-hidden">
        <h5 className="text-2xl leading-8 font-poppins font-bold mb-8 text-OxfordBlue dark:text-DarkWhite">
          Explore Our Different Categories
        </h5>
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
          className="carousel-container relative flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {categoriesImgs.map((category, index) => {
            const title = Object.keys(category)[0]
            const imageUrl = category[title]

            return (
              <div
                key={index}
                className={`carousel-item relative w-64 h-80 bg-DarkWhite dark:bg-EnglishViolet rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out group`}
              >
                <div className="relative">
                  <img
                    className="w-full h-40  p-3 rounded-lg object-fill group-hover:object-cover transition-all ease-in-out duration-500"
                    src={imageUrl || ""}
                    alt={title}
                  />
                  <Link
                    href={`./categories/${title}`}
                    className="overflow-hidden absolute text-xl font-semibold flex justify-center items-center left-0 top-0 w-0 h-0 bg-[rgba(255,255,255,.1)] backdrop-blur-sm backdrop-filter bg-opacity-50 text-center text-RedPoppy group-hover:w-full group-hover:h-full"
                  >
                    View Category
                  </Link>
                </div>
                <div className="w-64 h-80 p-4 bg-DarkWhite dark:bg-EnglishViolet rounded-lg text-center shadow-md transform hover:shadow-xl transition-transform duration-300 ease-in-out group ">
                  <h2 className="text-ml font-poppins dark:text-black font-semibold">
                    {title}
                  </h2>
                  <div className="flex flex-col justify-center items-center mt-4">
                    <Link href={`./categories/${title}`}>
                      <button className="bg-RedPoppy hover:bg-OxfordBlue text-xs text-DarkWhite font-poppins px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                        View Category
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesSlider
