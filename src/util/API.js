import axios from "axios"
export default async function fetcher(url) {
  const base = "https://dummyjson.com/products"
  const options = {
    headers: {
      accept: "application/json",
    },
  }
  try {
    const res = await axios.get(base + url, options)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }
}
