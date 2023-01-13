import React ,{useEffect,useState}from "react";
import { getFirestore,getDocs,collection,query,where,limit } from "firebase/firestore";
import { Link, useSearchParams } from "react-router-dom";
import ItemList from "./ItemList"


const Error404 = ()=>{

    const[items,setItems] = useState([]);
  

    useEffect(()=>{

        const db = getFirestore();
        const coleccionProductos = collection(db,"productos");
        const q = query(coleccionProductos, where("precio", "<", 10000), limit(3));
        getDocs(q).then((datos) => {
          setItems(datos.docs.map((prod)=>({id:prod.id, ...prod.data()})))
        });
  
      },[]);

    return <div className="container text-center">

            <h1 className="my-5">Error 404 :(</h1>
            <h2 className="my-5">¡Lo sentimos!</h2>
            <h3 className="my-5">Parece que el producto que estas buscando ya no se encuentra disponible</h3>

            <h4><Link to={"/"} className="btn btn-primary">Podes seguir buscando dentro de los productos disponibles</Link> o si no checkeá estos productos recomendados!</h4>

            <div className="my-5" style={{marginLeft:"14%"}}>        
                <ItemList items={items}/>
            </div>
        </div>


}

export default Error404;