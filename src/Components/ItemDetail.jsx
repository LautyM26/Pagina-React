import React from 'react';

function ItemDetail ({ item }) {
    return (
        <div>
            <h2>{item?.title}</h2>
            <img src={item?.thumbnail} alt={item?.title} />
            <p>{item?.description}</p>
        </div>
    )
}

export default ItemDetail