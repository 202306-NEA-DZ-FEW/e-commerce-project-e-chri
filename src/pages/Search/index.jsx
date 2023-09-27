import React from "react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import fetcher from "@/util/API"

function Search() {
  const router = useRouter()
  const { query } = router.query
  const [searchResults, setSearchResults] = useState({})
  useEffect(() => {
    if (query) {
      fetcher(`/search?q=${query}`).then((res) => {
        setSearchResults(res)
        console.log(searchResults)
      })
    }
  }, [query])
  return <div>Search</div>
}

export default Search
