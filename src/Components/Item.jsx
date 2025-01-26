import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router"

function Item({ item }) {
    return (
        <Col className="d-flex justify-content-center" lg={3}> 
            <Card style={{ width: "18rem", height: "100%" }} className="h-100 shadow-sm"> 
                <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    style={{ width: "100%", height: "200px", objectFit: "cover"}} 
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text className="fw-bold">${item.price}</Card.Text>
                    </div>
                    <Button variant="primary" as={Link} to={`/item/${item.id}`}>
                        Ver Detalle
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item
