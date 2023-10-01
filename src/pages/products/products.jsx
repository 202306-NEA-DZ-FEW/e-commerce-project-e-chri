import React from "react"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard"
import AllProducts from "@/components/AllProducts/AllProducts"

export default function Products({ products }) {
  return <AllProducts products={products} />
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
