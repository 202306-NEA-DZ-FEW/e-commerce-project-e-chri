import { useEffect, useState } from "react"
import AllProducts from "@/components/AllProducts/AllProducts"
import Filter from "@/components/Filter/Filter"
import { useAppcontext } from "@/context/state"

function ProductDisplay({ productsProp }) {
  // const [all_products, setAllProducts] = useState(products)
  const { products, setProducts } = useAppcontext()
  const [filter_product, set_filter_product] = useState()
  const [initialRender, setInitialRender] = useState(true)
  const [price_value, set_price_Value] = useState(2500)
  const [rating_value, set_rating_Value] = useState(0)
  const [search_value, set_search_value] = useState("")
  const [category_value, set_category_Value] = useState("All")
  setProducts(productsProp)
  // useEffect(()=>{
  //   displayed=products
  //   console.log('product displayed component', displayed)
  // },[products])
  // let displayed = products
  const displayed = products.filter((pro) => {
    return pro.rating > rating_value
  })

  return (
    <div className="flex flex-row">
      <Filter
        className=" fixed w-3"
        set_rating_Value={set_rating_Value}
        rating_value={rating_value}
        price_value={price_value}
        set_price_Value={set_price_Value}
        category_value={category_value}
        set_category_Value={set_category_Value}
        search_value={search_value}
        set_search_value={set_search_value}
        // all_products={products}
        // Update_product_state={setAllProducts}
      />
      <AllProducts
        products={displayed}
        search_value={search_value}
        category_value={category_value}
        rating_value={rating_value}
        price_value={price_value}
      />
    </div>
  )
}

export default ProductDisplay
