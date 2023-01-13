import React, { useEffect,useState,useContext } from "react";
import { collection, getDocs, getFirestore, query, where, getDoc } from "firebase/firestore"; 
import { useActionData,useParams } from "react-router-dom";
import { ConstextoFiltro } from "./context/ContextoFiltro";



const BotonesFiltrado= ()=>{

    const {filtrarMarca,items} = useContext(ConstextoFiltro);
   
    
   

    

        // useEffect(()=>{

        //     const db = getFirestore();
        //     const coleccionProductos = collection(db,"productos");
        //     const q = id ? query(coleccionProductos,where("categoria","==",id)):coleccionProductos;
        //     getDocs(q).then((datos) => {
        //       setItems(datos.docs.map((prod)=>({id:prod.id, ...prod.data()})))
        //     });
      
        //   },[id]);
 



    return <>

        <div className="div-filtro">
            <ul className="contenedor-filtros">
                <li className="btn text-bg-secondary btn-filtro">Filtrar por: Menor precio</li>
                <li className="btn text-bg-secondary btn-filtro">Filtrar por: Mayor precio</li>
                <li className="btn text-bg-secondary btn-filtro" >Filtrar por: Tipo</li>
                <li className="btn text-bg-secondary btn-filtro" onClick={()=>{filtrarMarca()}}>Filtrar por: Marca</li>
            </ul>
        </div>
       
    
    
    </>

}


export default BotonesFiltrado;