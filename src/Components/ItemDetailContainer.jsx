import React from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProduct } from '../firebase/db.js'

function ItemDetailContainer () {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect ( () => {
        getProduct(id)  
            .then(res => setItem(res))  
    }, [id]);

    return (
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer