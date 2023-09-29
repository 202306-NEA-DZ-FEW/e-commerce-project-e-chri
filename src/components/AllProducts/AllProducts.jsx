import { useState, useEffect, useCallback, memo } from "react"
import ProductCard from "../ProductCard/ProductCard"
import Filter from "../Filter/Filter"

function AllProducts({ products }) {
  const [filterproduct, setfilterProduct] = useState()

  console.log("products state", products)

  const Update_filter_product_state = useCallback(() => {
    ;(value) => {
      setfilterProduct(value)
    }
  }, [filterproduct])
  if (filterproduct) {
    return (
      <div className="flex flex-row">
        <Filter
          className=" fixed w-3"
          products={filterproduct}
          Update_product_state={Update_filter_product_state}
        />
        <div className="container mx-auto p-4">
          <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
            {filterproduct.products.map((product) => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-row">
        <Filter
          className=" fixed w-3"
          products={products}
          Update_product_state={Update_filter_product_state}
        />
        <div className="container mx-auto p-4">
          <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
            {products.products.map((product) => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default memo(AllProducts)
