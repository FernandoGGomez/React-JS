import React from "react";

const ItemDetail = ({item})=>{

 return <div className="row align-items-center">

                <div className="col-5 ">
                    <img src={item.img} alt={item.nombre} />
                </div>
                
                <div className="col-7">
                    <h2>{item.nombre}</h2>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">$ {item.precio}</p>
                </div>

        </div>


}


export default ItemDetail;


