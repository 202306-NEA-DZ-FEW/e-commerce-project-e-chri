import { useState } from "react"
import AllProducts from "@/components/AllProducts/AllProducts"
import Filter from "@/components/Filter/Filter"

function ProductDisplay({ products }) {
  const [all_products, setAllProducts] = useState(products)

  return (
    <div className="flex flex-row">
      <Filter
        className=" fixed w-3"
        all_products={products}
        Update_product_state={setAllProducts}
      />
      <AllProducts products={all_products} />
    </div>
  )
}

export default ProductDisplay
