import { useState, useEffect, memo, useCallback } from "react"
import TuneIcon from "@mui/icons-material/Tune"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import Slider from "@mui/material/Slider"
import Rating from "@mui/material/Rating"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { categories } from "@/context/data"
import { useAppcontext } from "@/context/state"

function removeValue(value, arr) {
  return arr.filter((item) => value != item)
}

function valuetext(value) {
  return `${value}$`
}
const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 1000,
    label: "1k",
  },
  {
    value: 2500,
    label: "2.5k",
  },
]
function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1
}

function Filter({
  /* all_products, setProducts  */ set_rating_Value,
  rating_value,
  price_value,
  set_price_Value,
  search_value,
  set_search_value,
  category_value,
  set_category_Value,
  products,
}) {
  const [filter_product, set_filter_product] = useState()
  const [initialRender, setInitialRender] = useState(true)
  const [isChecked, setIsChecked] = useState("All")

  //   const { products, setProducts } = useAppcontext()

  console.log("filter component", products)
  const suggestion_name = products.map((item) => {
    return item.title
  })
  // const category = new Set()
  // all_products.forEach((element) => {
  //   // category.add(element.category)
  // })
  const filteredProducts = products
  const filter_handlerchange = (
    name = undefined,
    rating = undefined,
    category = undefined,
    price = undefined,
  ) => {
    if (category_value.includes("All")) {
      set_filter_product(products)
      setProducts(products)
      return
    }
    if (rating === undefined) {
      set_filter_product(products)
      setProducts(products)
    } else {
      const new_products = products.filter((product) =>
        category_value.includes(product.category),
      )
      // .filter((product) => product.title === name)
      // .filter((product) => product.rating >= rating)
      // .filter(
      //   (product) => (product.price <= price)
      // )

      set_filter_product(new_products)
      setProducts(new_products)
      // console.log("filter result", new_products)
      // console.log("filter state ", filter_product)
    }
  }

  // useEffect(() => {
  //   if (initialRender) {
  //     setInitialRender(false)
  //     return
  //   }
  //   filter_handlerchange(
  //     search_value,
  //     rating_value,
  //     category_value,
  //     price_value,
  //   )
  // }, [search_value, category_value])

  // useEffect(() => {
  //   if (initialRender) {
  //     setInitialRender(false)
  //     return
  //   }
  //   filter_handlerchange(
  //     search_value,
  //     rating_value,
  //     category_value,
  //     price_value,
  //   )
  // }, [price_value, rating_value])

  const price_handleChange = (event, newValue) => {
    // console.log('price type', typeof newValue)
    set_price_Value(newValue)
    // console.log("price filter value", newValue)
  }
  const search_handleChange = (event, newValue) => {
    // console.log("name filter value", newValue)
    if (newValue === "All Products") {
      set_search_value("")
    } else {
      set_search_value(newValue)
    }
  }
  const rating_handleChange = (event, newValue) => {
    set_rating_Value(newValue)
    console.log("rating filter value", newValue)
  }

  const category_handleChange = (event, value) => {
    // console.log("category filter value", value)
    if (event.target.checked) {
      set_category_Value(value)
      setIsChecked(value)
    }
    //  else {
    //   set_category_Value(removeValue(value, category_value))
    // }
    // console.log("category filter state", category_value)
  }

  return (
    <div className=" pl-2 flex flex-row w-full">
      <div className="flex flex-row my-1 text-center">
        <TuneIcon></TuneIcon>
        <strong>Filter </strong>
      </div>
      <hr></hr>
      <div id="name_search" className="my-1">
        <Autocomplete
          onChange={search_handleChange}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={["All Products", ...suggestion_name]}
          getOptionSelected={(option, value) => {
            //nothing that is put in here will cause the warning to go away
            if (value === "") {
              return true
            } else if (value === option) {
              return true
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="filter by name"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </div>

      <div id="price" className="my-1">
        <strong>Price</strong>
        <span className="flex ">
          <Slider
            onChange={price_handleChange}
            max={2500}
            aria-label="Restricted values"
            defaultValue={2500}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
          />
          <strong className=" w-1/4 text-center">$</strong>
        </span>
      </div>
      <div id="rating" className="my-1">
        <strong>rating</strong>
        <Rating
          name="half-rating"
          defaultValue={0}
          precision={0.1}
          value={rating_value || 0}
          onChange={rating_handleChange}
        />
      </div>
      {/* <div id="category" className="my-1">
        <strong>Category</strong>
        <FormGroup className="grid grid-cols-1 justify-center justify-items-start ">
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked === "All"}
                onChange={(e) => category_handleChange(e, "All")}
              />
            }
            label="All"
          />
          {categories.map((item, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox onChange={(e) => category_handleChange(e, item)} />
                }
                checked={isChecked === item}
                label={item}
                key={index}
              />
            )
          })}
        </FormGroup>
      </div> */}
    </div>
  )
}

export default Filter
