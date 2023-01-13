import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { getDoc,doc, getFirestore } from "firebase/firestore";
import Error404 from "./Error404";
const ItemDetailContainer = ()=>{

    const[item,setItem] = useState([]);
    const[loading,setLoading] = useState(true);
    const {id} = useParams();
    const [disponible,setDisponible] = useState(true);

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productos.find(item => item.id === parseInt(id))); 
    //         }, 500);
    //     });

    //     promesa.then((data) => {
    //         setLoading(false);
    //         setItem(data);
    //     })
    // }, [id]);

    useEffect(()=>{
        const db = getFirestore();
        const producto = doc(db,"productos",id);
        getDoc(producto).then((datos)=>{
            if(datos.exists()){
                
                setItem({id:datos.id,...datos.data()});
                setLoading(false);
                setDisponible(true);
            }else{

                console.log("El producto no se encuentra disponible")
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