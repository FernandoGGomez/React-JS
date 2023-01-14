import React,{useState,useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { addDoc, collection, getDocs, getFirestore, query, where, limit, getDoc } from "firebase/firestore"; 
import BotonesFiltrado from "./BotonesFiltrado";
import { ConstextoFiltro } from "./context/ContextoFiltro";


const ItemsListContainer = () => {

  // const {prods} = useContext(ConstextoFiltro);



    const[items,setItems] = useState([]);
    const[loading,setLoading] = useState(true);
    const {id} = useParams();
    
    

    useEffect(()=>{

      const db = getFirestore();
      const coleccionProductos = collection(db,"productos");
      const q = id ? query(coleccionProductos,where("categoria","==",id)):coleccionProductos;
      getDocs(q).then((datos) => {
        setItems(datos.docs.map((prod)=>({id:prod.id, ...prod.data()})))
        console.log(datos)
      });

      setLoading(false);

    },[id]);
   

  return  <div className="container margen">
              {/* <div><BotonesFiltrado/></div> */}
                    {loading ? <Loader/> : <ItemList items={items}/>}
                                  
                        
        </div>


}


export default ItemsListContainer;