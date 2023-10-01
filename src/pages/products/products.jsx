import React from "react"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard"
import AllProducts from "@/components/AllProducts/AllProducts"
import Filter from "@/components/Filter/Filter"
import { useState } from "react"

export default function Products({ products }) {
  const [filter_product, set_filter_product] = useState()
  const [initialRender, setInitialRender] = useState(true)
  const [price_value, set_price_Value] = useState(2500)
  const [rating_value, set_rating_Value] = useState(0)
  const [search_value, set_search_value] = useState("")
  const [category_value, set_category_Value] = useState("All")
  const filtreProducts = products.products
  return (
    <div className="flex flex-col">
      <Filter
        set_rating_Value={set_rating_Value}
        rating_value={rating_value}
        price_value={price_value}
        set_price_Value={set_price_Value}
        category_value={category_value}
        set_category_Value={set_category_Value}
        search_value={search_value}
        set_search_value={set_search_value}
        products={filtreProducts}
        // all_products={products}
        // Update_product_state={setAllProducts}
      />
      <AllProducts
        products={products}
        search_value={search_value}
        category_value={category_value}
        rating_value={rating_value}
        price_value={price_value}
      />
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
