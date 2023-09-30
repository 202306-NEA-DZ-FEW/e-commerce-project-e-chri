import ProductCard from "../ProductCard/ProductCard"

function AllProducts({ products }) {
  // const [filterproduct, setfilterProduct] = useState(products)
  let filterproduct = products
  console.log("products state", products)

  // const Update_filter_product_state = useCallback(() => {
  //   (value) => {
  //     setfilterProduct(value)
  //   }
  // }, [filterproduct])
  if (filterproduct) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
          {filterproduct.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-2xl ml-20">Explore Our Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-8 m-20">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default AllProducts
