import React from 'react'
import ItemCount from './ItemCount.jsx'

function ItemDetail({ item }) {
    return (
      <div className="item-detail">
        <h2>{item?.title}</h2>
        <img src={item?.thumbnail} alt={item?.title} style={{ width: "300px", height: "300px", objectFit: "cover" }}/>
        <p>{item?.description}</p>
        <ItemCount item={item}/>
      </div>
    )
}
  
export default ItemDetail
