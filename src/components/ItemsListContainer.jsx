import React,{useState,useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import {  collection, getDocs, getFirestore, query, where, } from "firebase/firestore"; 


const ItemsListContainer = () => {

  
    const[items,setItems] = useState([]);
    const[loading,setLoading] = useState(true);
    const {id} = useParams(); //obtengo el id de la URL
    
    

    useEffect(()=>{

      const db = getFirestore(); //obtengo la base de datos
      const coleccionProductos = collection(db,"productos"); //obtengo la coleccion donde se guardan los productos
      const q = id ? query(coleccionProductos,where("categoria","==",id)):coleccionProductos; //filtro los productos de acuerdo al id en la URL
      getDocs(q).then((datos) => {
        setItems(datos.docs.map((prod)=>({id:prod.id, ...prod.data()})))
      });

      setLoading(false);

    },[id]);
   

  return  <div className="container margen">
              
                    {loading ? <Loader/> : <ItemList items={items}/>}
                                  
                        
        </div>


}


export default ItemsListContainer;