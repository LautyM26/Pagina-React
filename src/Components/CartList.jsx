import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartList({ items, onRemoveItem  }) {
  return (
    <ListGroup className="w-75">
      {items.map(item => (

        <ListGroup.Item className="d-flex justify-content-between" key={item.id}>
          {item.title} x {item.quantity} ${item.price}
          <Button variant="danger" onClick={() => onRemoveItem(item.id)}>x</Button>
        </ListGroup.Item>
        
      ))}
    </ListGroup>
  );
}

export default CartList