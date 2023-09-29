import { createContext, useContext, useState } from "react"
import { categories } from "./data"
import { useTheme } from "next-themes"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/util/firebase"
import { updateFirestoreCart } from "@/util/firebase"

const AppContext = createContext()

export function AppWrapper({ children }) {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const [user, setUser] = useState({})
  const [cart, setCart] = useState([])

  function authChange() {
    onAuthStateChanged(auth, (logUser) => {
      if (logUser) {
        setUser(logUser)
        setIsLogged(true)
        const displayName = logUser.displayName
        console.log("User is logged in as:", displayName)
      } else {
        console.log("User is not logged in")
        setUser({})
        setIsLogged(false)
      }
    })
  }

  function toggledarkMode() {
    console.log("darkmode", darkMode)
    setDarkMode(!darkMode)
  }
  function addToCart(product) {
    setCart([...cart, product])
    updateFirestoreCart([...cart, product])
  }

  function removeFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId)
    setCart(updatedCart)
    updateFirestoreCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }
  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggledarkMode,
        categories,
        isLogged,
        setIsLogged,
        setTheme,
        theme,
        isShoppingCartOpen,
        setIsShoppingCartOpen,
        user,
        setUser,
        authChange,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export function useAppcontext() {
  return useContext(AppContext)
}
