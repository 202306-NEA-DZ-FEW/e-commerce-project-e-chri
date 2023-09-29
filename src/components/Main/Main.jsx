import { useState, useEffect, useCallback } from "react"
import AllProducts from "@/components/AllProducts/AllProducts"
import Filter from "@/components/Filter/Filter"

function Main({ products }) {
  return (
    <>
      <Filter
        className=" fixed w-3"
        products={products}
        Update_product_state={Update_product_state}
      />
      <AllProducts products={product} />
    </>
  )
}

export default Main
