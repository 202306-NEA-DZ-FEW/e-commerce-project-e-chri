import React from "react"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard"

export default function Products({ products }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-3xl font-poppins ml-20">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
        {products.products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const url = ""
  try {
    const products = await fetcher(url)
    return {
      props: { products },
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
