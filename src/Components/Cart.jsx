import React from 'react'
import CartList from './CartList.jsx'
import Button from 'react-bootstrap/Button'
import Checkout from './Checkout.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useState } from 'react'

function Cart() {
    const { cart, getTotal, removeProduct } = useCart();
    const [formVisible, visibilidadForm] = useState(false);

    if (cart.length === 0) {
        return (
            <div className="empty-cart d-flex flex-column align-items-center justify-content-center min-vh-100">
                <h2 className="text-muted">¡No tienes productos en el carrito!</h2>
                <Button variant="dark" href="/" className="mt-3">
                    Ir a comprar
                </Button>
            </div>
        );
    }

    const finalizarCompra = () => {
        visibilidadForm(true);
    };

    return (
        <div className="cart-container d-flex flex-column align-items-center py-5">
            <CartList items={cart} onRemoveItem={removeProduct} />
            <p className="total mt-3">Total: <span>${getTotal()}</span></p>

            <Button variant="dark" className="btn-finalizar mt-3" onClick={finalizarCompra}>
                Finalizar Compra 🛒
            </Button>

            {formVisible && <Checkout />}
        </div>
    );
}

export default Cart
