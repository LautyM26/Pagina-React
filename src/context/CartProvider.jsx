import { CartContext } from "./CartContext"
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function CartProvider ({children}) {
      const [cart, setCart] = useState([])
  
      const addToCart = item => {
        if (item.quantity <= 0) {
          alert("La cantidad debe ser mayor a 0.")
          return;
      }
    
      const isInCart = cart.some((prod) => prod.id === item.id)
      if (!isInCart) {
          setCart([...cart, item])
      } else {
        Swal.fire({
          title: "No se permite",
          text: "Este producto ya ha sido agregado al carrito",
          icon: "warning",
        })
      }
    }

    const getQty = () => {
      const quantities = cart.map(item => item.quantity)
      const quantitiesTotal = quantities.reduce((acc, current) => acc + current, 0)
      return quantitiesTotal
    }

    const getTotal = () => {
      const totales = cart.map(item => item.quantity*item.price)
      const total = totales.reduce((acc, current) => acc + current, 0)
      return total
    }

    const removeProduct = (id) => {
      setCart(cart.filter(item => item.id !== id))
  };

    return (
      <CartContext.Provider value={{cart, addToCart, getQty, getTotal, removeProduct}}>
          {children}
      </CartContext.Provider>
    )
}