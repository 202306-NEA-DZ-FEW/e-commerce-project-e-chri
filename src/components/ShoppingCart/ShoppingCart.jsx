import { Fragment, useState } from "react"
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi"
import { useAppcontext } from "@/context/state"

export default function ShoppingCart() {
  const [open, setOpen] = useState(true)
  const { cart, removeFromCart } = useAppcontext()

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }

  const handleRemove = async (productId) => {
    removeFromCart(productId)
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        open ? "block" : "hidden"
      } z-50`}
    >
      <div className="fixed inset-y-0 right-0 w-[400px] overflow-y-auto bg-white dark:bg-OxfordBlue shadow-xl transform translate-x-0 transition-transform">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3>
              {" "}
              <FiShoppingCart />{" "}
            </h3>
            <h3 className="dark:text-DarkWhite text-lg  text-gray-900 font-poppins">
              {" "}
              My Shopping Cart{" "}
            </h3>
            <button
              type="button"
              className="p-2 text-gray hover:text-gray"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close panel</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-20 w-h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="dark:text-DarkWhite flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">${product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-#313048">
                          {product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-#313048">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            onClick={() => handleRemove(product.id)}
                            type="button"
                            className="font-medium font-poppins text-RedPoppy hover:text-OxfordBlue"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-#313048 px-4 py-6">
          <div className="dark:text-DarkWhite flex justify-between text-base font-poppins text-#313048-900">
            <p>Total</p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-#313048 font-opensans">
            Services fees and taxes calculated: 0000
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-DarkWhite dark:bg-EnglishViolet dark:hover:bg-gray-500 flex items-center justify-center rounded-md border border-transparent bg-OxfordBlue px-6 py-3 text-base font-opensans shadow-sm hover:bg-EnglishViolet"
            >
              Checkout
            </a>
          </div>
          <div className="dark:text-#313048 mt-6 flex justify-center text-center text-sm text-#313048">
            <p>
              or&nbsp;
              <button
                type="button"
                className="dark:text-gray-500 font-medium font-opensans text-EnglishViolet dark:hover:text-DarkWhite hover:text-OxfordBlue"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
