import ProductCard from "../ProductCard/ProductCard"

function AllProducts({
  products,
  rating_value,
  price_value,
  category_value,
  search_value,
}) {
  // const [filterproduct, setfilterProduct] = useState(products)
  const displayed = products.filter((pro) => {
    console.log(
      "test displayed",
      pro["title"],
      pro["title"].includes(search_value),
    )
    console.log("search ", search_value)
    if (
      rating_value === 0 &&
      price_value === 2500 &&
      search_value === "" &&
      category_value === "All"
    )
      return true
    else
      return (
        pro.rating > rating_value &&
        pro.price < price_value &&
        pro["title"].includes(search_value) &&
        pro.category === category_value
      )
  })
  // let filterproduct = products
  // console.log("all products component", products)

  // const Update_filter_product_state = useCallback(() => {
  //   (value) => {
  //     setfilterProduct(value)
  //   }
  // }, [filterproduct])
  // if (filterproduct) {
  console.log("displayed products", displayed)
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
        {displayed.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  )
  // } else {
  //   return (
  //     <div className="container mx-auto p-4">
  //       <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
  //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
  //         {displayed.map((product) => (
  //           <div key={product.id}>
  //             <ProductCard {...product} />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }
}
export default AllProducts
