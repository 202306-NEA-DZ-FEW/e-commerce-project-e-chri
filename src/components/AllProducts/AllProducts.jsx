import React from "react"
import ProductCard from "../ProductCard/ProductCard"
import Link from "next/link"
import Button from "../Button/Button"

export default function AllProducts({ products }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
        {products.products.map((product) => (
          <div key={product.id}>
            <Link href="#">
              <ProductCard {...product} />
            </Link>
            <Button />
          </div>
        ))}
      </div>
    </div>
  )
}
