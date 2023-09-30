import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import fetcher from "@/util/API"
import ProductCard from "@/components/ProductCard/ProductCard" // Import your ProductCard component

function Search() {
  const router = useRouter()
  const { query } = router.query
  const [searchResults, setSearchResults] = useState({ products: [] })

  useEffect(() => {
    if (query) {
      fetcher(`/search?q=${query}`).then((res) => {
        setSearchResults(res)
      })
    }
  }, [query])

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-2xl ml-20">Search Results</h1>
      <div className="flex flex-wrap -m-4">
        {searchResults.products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <ProductCard
              // title={product.title}
              // price={product.price}
              // images={product.images}
              {...product}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
