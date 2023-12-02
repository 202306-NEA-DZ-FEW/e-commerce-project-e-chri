import React from "react"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard"

export default function Category({ productCategory }) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row flex-wrap overflow-hidden gap-x-2 gap-y-8 m-20">
        {" "}
        {/* grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 */}
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
  const url = `/category/${category}`
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
