import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router"

function Item ({ item }) {
    return (
        <Col lg={4}>
        <Card>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            ${item.price}
          </Card.Text>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver Detalle</Button>
        </Card.Body>
     </Card>
    </Col> 
    )
}

export default Item