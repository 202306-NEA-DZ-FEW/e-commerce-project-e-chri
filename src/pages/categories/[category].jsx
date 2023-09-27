import React from "react"
import Link from "next/link"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard"
import Button from "@/components/Button/Button"

export default function Category({ productCategory }) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
        {productCategory.products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { category } = context.query
  const url = `products/category/${category}`
  try {
    const productCategory = await fetcher(url)
    return {
      props: { productCategory },
    }
  } catch (error) {
    console.log(error)
    return {
      props: { productCategory: null, error: "Failed to fetch products" },
    }
  }
}
