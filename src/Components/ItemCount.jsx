import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'

function ItemCount({item}) {
    const [count, setCount] = useState(0);
    const { addToCart } = useContext (CartContext)

    const handleAdd = () => {
        setCount(count + 1)
    };

    const handleSubtract = () => {
        if (count > 1) { 
            setCount(count - 1)
        }
    };

    const handleAddToCart = () => {
        if (count > 0) { 
            addToCart({ ...item, quantity: count })
        }
    }

    return (
        <div className="item-count">

          <div className="counter d-flex align-items-center justify-content-center">

            <Button variant="light" onClick={handleSubtract} disabled={count <= 1}> - </Button>
            <span className="count mx-3">{count}</span>
            <Button variant="light" onClick={handleAdd}> + </Button>

          </div>
          
          <Button className="add-to-cart mt-3" variant="primary" onClick={handleAddToCart} disabled={count === 0}> Agregar al carrito </Button>

        </div>
      );
}

export default ItemCount