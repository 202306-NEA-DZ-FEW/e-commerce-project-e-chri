import React from "react"
import { TbTruckDelivery } from "react-icons/tb"
import { BsHeadset } from "react-icons/bs"
import { RiShieldCheckFill } from "react-icons/ri"

export default function Services() {
  return (
    <div className="m-20 sm:flex">
      <div className="flex flex-col md:flex-row justify-center ml-20 lg:space-x-64 sm:space-y-20 md:space-x-36 sm:space-x-0">
        <div className="text-center">
          <div className="bg-OxfordBlue dark:bg-DarkWhite text-DarkWhite dark:text-black text-6xl w-28 h-28 border-8 border-gray-400 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all duration-300">
            <TbTruckDelivery />
          </div>
        </div>

        <div className="text-center">
          <div className="bg-OxfordBlue dark:bg-DarkWhite text-DarkWhite dark:text-black text-6xl w-28 h-28 border-8 border-gray-400 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all duration-300">
            <BsHeadset />
          </div>
        </div>

        <div className="text-center">
          <div className="bg-OxfordBlue dark:bg-DarkWhite text-DarkWhite dark:text-black text-6xl w-28 h-28 border-8 border-gray-400 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-all duration-300">
            <RiShieldCheckFill />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center ml-20 space-x-24 sm:space-y-6 sm:space-x-0">
        <div className="text-center text-black dark:text-white">
          <p className=" mt-4 text-2xl sm:text-xl  font-poppins font-bold">
            FREE AND FAST DELIVERY
          </p>
          <p className=" mt-2">Free delivery for all orders over $140</p>
        </div>

        <div className="text-center text-black dark:text-white">
          <p className=" mt-4 text-2xl sm:text-xl  font-poppins font-bold">
            24/7 CUSTOMER SERVICE
          </p>
          <p className=" mt-2">Friendly 24/7 customer service</p>
        </div>

        <div className="text-center text-black dark:text-white">
          <p className=" mt-4 text-2xl sm:text-xl font-poppins font-bold">
            MONEY BACK GUARANTEE
          </p>
          <p className=" mt-2">We return money within 30 days</p>
        </div>
      </div>
    </div>
  )
}
