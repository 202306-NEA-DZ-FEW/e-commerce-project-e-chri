import React, { useState, useEffect } from "react"
import fetcher from "@/util/API"
import { FiTruck, FiRepeat } from "react-icons/fi"
import ProductCard from "@/components/ProductCard/ProductCard"

export default function SingleProduct({ productDetail }) {
  console.log("product", productDetail.category)
  useEffect(() => {
    setSelectedImg(productDetail.images[0])
    fetcher(`/search?q=${qte}`).then((res) => {
      setRelated(res.products)
      console.log("res", res.products)
    })
  }, [productDetail])
  // console.log('prodeuct details', productDetail)
  const AllImages = [...productDetail.images]
  const [selectedImg, setSelectedImg] = useState(AllImages[0])
  const [qte, setQte] = useState(1)
  const [related, setRelated] = useState([])

  const [backgroundPosition, setbackgroundPosition] = useState()

  const sideImages = AllImages.filter((img) => {
    return img !== selectedImg
  })
  console.log("side images", sideImages)
  console.log("selected Img", AllImages[selectedImg])

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setbackgroundPosition(`${x}% ${y}%`)
  }
  const handleMouseLeave = (e) => {
    setbackgroundPosition(undefined)
  }

  function handleQte(n) {
    if (n === 0) {
      if (qte === 1) return
      else setQte(qte - 1)
    } else {
      if (qte === productDetail.stock) return
      else setQte(qte + 1)
    }
  }
  return (
    <main className="flex container mt-10 flex-col h-full w-full justify-around items-center">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-around gap-4">
        <div className="w-1/2 lg:w-3/5 md:w-3/5 flex flex-col-reverse md:flex-row sm:flex-row items-center">
          <div className="flex flex-row lg:felx-col md:flex-col items-center justify-around w-1/2 md:w-1/3 lg:w-1/3">
            {sideImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImg(img)}
                className="w-28 h-28 p-2 "
              >
                <img
                  src={img}
                  alt={productDetail.title}
                  className="aspect-square rounded-lg shadow-[0_0_4px_4px_rgba(0,0,0,.2)]"
                />
              </button>
            ))}
          </div>
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="p-1 w-full h-64 md:w-2/3 lg:w-2/3  md:h-72 lg:h-72 bg-no-repeat"
            style={{
              backgroundImage: `url(${selectedImg})`,
              backgroundPosition: backgroundPosition,
            }}
          ></div>
        </div>

        <div className="w-1/2 lg:w-2/5 md:w-2/5 flex flex-col items-center justify-between text-left">
          <div className="w-full flex flex-col gap-2 items-start">
            <h1 className="lg:text-6xl md:text-6xl text-3xl font-poppins dark:text-white font-black">
              {productDetail.title}
            </h1>
            <p>
              <span className="text-yellow-400 pr-1">&#9733;</span>{" "}
              {productDetail.rating} | On Discount :{" "}
              <span className="text-base text-RedPoppy font-poppins dark:text-white font-normal">
                -{productDetail.discountPercentage}%{" "}
              </span>
            </p>
            <p>In Stock : {productDetail.stock}</p>
            <p className="text-2xl lg:text-4xl md:text-4xl w-11/12 font-poppins relative dark:text-white font-semibold  ">
              ${productDetail.price}
            </p>
          </div>
          <p className="lg:text-lg md:text-lg text-base font-poppins w-full dark:text-white font-light my-6 relative after:content[''] after:w-full after:h-px after:bg-RedPoppy after:absolute after:left-0 after:-bottom-2 ">
            Brand : {productDetail.brand} <br />
            Description : {productDetail.description}
          </p>
          <div className="w-full flex flex-row gap-4 justify-around items-start">
            <span className="flex flex-row justify-center items-center ">
              <button
                className="w-12 h-12 text-black bg-white border border-EnglishViolet rounded font-bold text-xl"
                onClick={() => handleQte(0)}
              >
                -
              </button>
              <input
                type="number"
                name="qte"
                id="qte"
                value={qte}
                onChange={(e) => setQte(parseInt(e.target.value))}
                className="h-12 w-14 pl-6 text-xl"
              />
              <button
                className="w-12 h-12 text-white bg-RedPoppy rounded font-bold text-xl"
                onClick={() => handleQte(1)}
              >
                +
              </button>
            </span>
            <button className="w-fit px-2 h-12 text-white bg-RedPoppy rounded font-medium md:text-xl lg:text-xl text-lg">
              + Add to cart
            </button>
          </div>
          <div className="flex flex-col mt-10 justify-center items-center">
            <div className="w-full flex flex-row items-center p-4 py-6 gap-2 border border-EnglishViolet rounded rounded-b-none">
              <FiTruck className="text-4xl font-extralight" />
              <p className="flex flex-col">
                <span className="text-lg font-normal">Free Delivery</span>
                <span className="text-xs font-light">
                  Enter your postal code for Delivery Availability
                </span>
              </p>
            </div>
            <div className="w-full flex flex-row items-center p-4 py-6 gap-2 border border-EnglishViolet rounded rounded-t-none">
              <FiRepeat className="text-4xl font-extralight" />
              <p className="flex flex-col">
                <span className="text-lg font-normal">Return Delivery</span>
                <span className="text-xs font-light">
                  Free 30 Days Delivery Returns. Details
                </span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-8 w-full items-center">
        <h1
          className="text-2xl font-bold w-4/5 relative text-left after:absolute after:-bottom-2 after:left-0 after:w-full after:h-px
        after:content[''] after:bg-EnglishViolet"
        >
          Related products
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-around w-4/5 px-8 gap-10">
          {related.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} className=" w-fit" />
          ))}
        </div>
      </div>
    </main>
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
