import React from "react"

export default function ProductCard({ title, price, images }) {
  return (
    <div>
      <div className="bg-neutral-100 w-64 h-64 flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src={images[0]}
          alt={title}
        />
      </div>
      <div className="w-64 flex justify-between">
        <p className="leading-loose font-semibold">{title}</p>
        <p className="text-[#DB4444] font-semibold">${price}</p>
      </div>
    </div>
  )
}
