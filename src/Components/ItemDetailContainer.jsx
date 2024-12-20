import React from 'react';
import ItemCount from './ItemCount.jsx';
import ItemDetail from './ItemDetail.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function ItemDetailContainer () {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect ( () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data); // Guarda el producto en el estado
                setLoading(false); // Termina el estado de carga
            })
            .catch(err => {
                console.error("Error fetching product details:", err);
                setLoading(false); // Asegúrate de terminar el estado de carga incluso si hay un error
            });
    }, [id]);

    return (
    <div>
        <ItemDetail item={item} />
        <ItemCount />
    </div>
    )
}

export default ItemDetailContainer;