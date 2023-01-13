import React,{ useState, createContext,useEffect } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where, limit, getDoc } from "firebase/firestore"; 


export const ConstextoFiltro = createContext();

   

    const ConstextoFiltroProvider =({children})=>{

        const [prods,setProds] = useState([]);

    // const filtrarMarca = (marca) =>{

    //     const db = getFirestore();
    //     const coleccionProductos = collection(db,"productos")
    //     const q = query(coleccionProductos,where("marca","==",marca));
    //     getDocs(q).then((datos) => {
    //         setProds(datos.docs.map((prod)=>({id:prod.id, ...prod.data()})))
    //       });


    // }
    

 



    // return (
    //     <ConstextoFiltro.Provider value={{filtrarMarca,prods}}>
    //         {children}
    //     </ConstextoFiltro.Provider>
    // )

}

export default ConstextoFiltroProvider;