import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import productos from "./json/productos.json";


const ItemsListContainer = () => {

    const[items,setItems] = useState([]);
    const {id} = useParams();
    useEffect(() => {

        const promesa = new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve(id ? productos.filter(prod => prod.categoria === id) : productos);

            },2000);
        });

        promesa.then((data)=>{

            setItems(data);

        })


    },[id]);

  return  <div className="container">

                    <ItemList items={items}/>
                        
                    <ItemCount stock={5}/>
        </div>


}


export default ItemsListContainer;