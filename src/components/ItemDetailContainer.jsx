import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { getDoc,doc, getFirestore } from "firebase/firestore";
import Error404 from "./Error404";
const ItemDetailContainer = ()=>{

    const[item,setItem] = useState([]);
    const[loading,setLoading] = useState(true);
    const {id} = useParams(); //obtengo el id de la URL
    const [disponible,setDisponible] = useState(true);


    useEffect(()=>{
        const db = getFirestore(); //obtengo la base de datos
        const producto = doc(db,"productos",id); //obtengo un producto de la coleccion productos que coincida con el id de la URL
        getDoc(producto).then((datos)=>{
            if(datos.exists()){ 
                //si el producto existe lo seteo en items
                setItem({id:datos.id,...datos.data()});
                setLoading(false);
                setDisponible(true);

            }else{
                //si el producto no existe setDisponible es falso y se va a renderizar el componente Error404
                setDisponible(false)

            }
        })


    },[id]);
    return (
        <div className="container my-5">
            {disponible ? loading ? <Loader/> :<ItemDetail item={item}  />: <Error404/> }
        </div>
    )


}

export default ItemDetailContainer;