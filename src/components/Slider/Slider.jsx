import React, { useState, useEffect } from "react"

function Slider({ images }) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative mb-24">
      <div
        id="carouselExampleIndicators"
        className="w-full relative"
        data-te-carousel-init51
        data-te-ride="carousel"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[300px] md:h-[400px] xl:h-[500px] bg-cover bg-center ${
              index === activeIndex ? "" : "hidden"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
            data-te-carousel-item
            data-te-carousel-active={index === activeIndex}
          ></div>
        ))}

        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-40 text-white hover:bg-opacity-60 focus:outline-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="prev"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 bg-opacity-40 text-white hover:bg-opacity-60 focus:outline-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="next"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider
