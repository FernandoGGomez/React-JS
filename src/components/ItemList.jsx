import React from "react";
import Item from "./Item"

const ItemList = ({items}) =>{

    return <div className="row item_list">
              
                
                    { items.map(producto => <Item key={producto.id} producto={producto}/>) }
                
                
            </div>


}

export default ItemList;