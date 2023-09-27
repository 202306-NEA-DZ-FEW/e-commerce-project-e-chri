import fetcher from "@/util/API"

export default function Home({ products }) {
  console.log(products)
  return <main></main>
}

export async function getServerSideProps() {
  const url = "products"
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
