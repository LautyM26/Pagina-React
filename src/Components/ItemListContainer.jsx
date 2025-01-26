import React from 'react'
import ItemList from "./ItemList"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if (id) {
          getProductsByCategory(id)
            .then(res => setItems(res))
        } else {
          getProducts()  
            .then(res => setItems(res))
        }
    }, [id])

    return (
      <ItemList items={items} />
    )
}

export default ItemListContainer