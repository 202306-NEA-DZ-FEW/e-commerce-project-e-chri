import fetcher from "@/util/API"
import Categories from "@/components/Categories/Categories"
import AllProducts from "@/components/AllProducts/AllProducts"

export default function Home({ allProducts, categories }) {
  // console.log(products)
  return (
    <main>
      <Categories categories={categories} />
      <AllProducts allProducts={allProducts} />
    </main>
  )
}

export async function getServerSideProps() {
  const url = "products"
  try {
    const allProducts = await fetcher(url)
    const categories = await fetcher("products/categories")
    return {
      props: { allProducts, categories },
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
