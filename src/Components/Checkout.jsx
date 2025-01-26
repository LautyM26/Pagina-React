import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout() {
    const { cart, getTotal } = useCart();
    const [orderId, setOrderId] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const [name, email, phone] = form

        const order = {
            buyer: {
                name: name.value,
                email: email.value,
                phone: phone.value,
            },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };

        try {
            const docRef = await createOrder(order)
            setOrderId(docRef.id)
        } catch (error) {
            console.error('Error al finalizar la compra: ', error)
        }
    };

    if (orderId) {
        return (
            <div className="d-flex flex-column align-items-center mt-5">
                <h2>¡Gracias por tu compra!</h2>
                <p>
                    Tu número de orden es: <strong>{orderId}</strong>
                </p>
                <Button variant="dark" href="/">
                    Volver al inicio
                </Button>
            </div>
        );
    }

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100">
            <Card className="p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
                <Form onSubmit={handleSubmit}>
                    <h3 className="mb-4 text-center">Completa tus datos</h3>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre y Apellido" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Email@gmail.com" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" placeholder="+5491123445" required />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">
                            Finalizar compra 🛒
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

export default Checkout
