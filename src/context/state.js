import { createContext, useContext, useState, useEffect } from "react"
import { categories } from "./data"
import { useTheme } from "next-themes"
import { onAuthStateChanged } from "firebase/auth"
import { auth, fetchUserCart } from "@/util/firebase"
import { updateFirestoreCart } from "@/util/firebase"

const AppContext = createContext()

export function AppWrapper({ children }) {
  // const {theme, setTheme} = useTheme();
  const [theme, setTheme] = useState("light")
  const [darkMode, setDarkMode] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const [user, setUser] = useState({})
  const [cart, setCart] = useState([])

  useEffect(() => {
    setTheme(darkMode ? "dark" : "light")
    console.log("state usefect", theme)
  }, [darkMode])

  async function authChange() {
    onAuthStateChanged(auth, (logUser) => {
      if (logUser) {
        setUser(logUser)
        setIsLogged(true)
        const displayName = logUser.displayName
        fetchUserCart(logUser.uid).then((data) => setCart(data.products))
        // setCart(cartItems)
        // console.log('cart ',cartItems)
        console.log("User is logged in as:", displayName)
      } else {
        console.log("User is not logged in")
        setUser({})
        setIsLogged(false)
        clearCart()
        console.log("log out", cart)
      }
    })
  }

  function toggledarkMode() {
    setDarkMode(!darkMode)
    // console.log("darkmode", darkMode)
    const newTheme = theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
    console.log("old theme", theme)
    console.log("new theme", newTheme)
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
