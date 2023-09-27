import React from "react"
import fetcher from "@/util/API"

export default function SingleProduct({ productDetail }) {
  return (
    <div class="flex container  px-4 py-8 w-3/4 m-20">
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-md">
          <img src={productDetail.thumbnail} alt={productDetail.title} />
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md">
          <img src={productDetail.images[0]} alt={productDetail.title} />
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md">
          <img src={productDetail.images[1]} alt={productDetail.title} />
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md">
          <img src={productDetail.images[2]} alt={productDetail.title} />
        </div>
      </div>

      <div className="w-3/4 ml-20 leading-loose">
        <h1 className="text-3xl font-poppins dark:text-whiht font-bold">
          {productDetail.title}
        </h1>
        <p>
          <span className="text-yellow-400 pr-1">&#9733;</span>{" "}
          {productDetail.rating} | On Discount :{" "}
          <span className="text-base text-RedPoppy font-poppins dark:text-whiht font-normal">
            -{productDetail.discountPercentage}%{" "}
          </span>
        </p>
        <p className="text-lg font-poppins dark:text-whiht font-semibold">
          ${productDetail.price}
        </p>

        <p className="text-base font-poppins dark:text-whiht font-normal my-6">
          Brand : {productDetail.brand} <br />
          Description : {productDetail.description}
        </p>

        <p>In Stock : {productDetail.stock}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.query
  const url = `/${productId}`
  try {
    const productDetail = await fetcher(url)
    return {
      props: { productDetail },
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
