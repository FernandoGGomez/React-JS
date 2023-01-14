import React ,{useEffect,useState}from "react";
import { Link,useParams } from "react-router-dom";
import { getFirestore,getDoc,doc,collection,query } from "firebase/firestore";



const TankYou = () =>{

    const {id} = useParams();
    const[items,setItems] = useState([]);
    const [comprador,setComprador] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{

        const db = getFirestore();
        const ordersCollection = collection(db,"orders");
        const factura = doc(ordersCollection,id)
        const q = query(factura);
        getDoc(q).then((datos) => {
            setItems(datos.data().items.map((prod)=>(prod)))
            setTotal(datos.data().total)
            setComprador(datos.data().buyer)
          
        });
    
      },[]);

    return <div className="text-center my-5">
            <h1 className="h1-telefono">Gracias por tu compra {comprador.name}</h1>
            <div className="container alert alert-primary text-center" role="alert" >El ID de su compra es: <b>{id}</b></div>
            <h4 className="text-center">Se envió una copia de tu factura a <b>{comprador.email}</b>(En realidad no se envió jaja) </h4>
            {console.log(items)}
            <div className="my-5" >        
                
                
            {items.map(prod =>(
                    <div className="col-12 container border-top" key={prod.id}>
                        
                            
                        <div className="row mb-5 align-items-center border-bottom">
                            <div className="col-4 text-center">
                                <img src={prod.img} width={120} alt={prod.title} />
                            </div>
                            <div className="col-3">
                                
                                <h5>{prod.title}</h5>    
                            </div>    
                            <div className="col-2 text-center">
                                
                                <h5>x{prod.quantity}</h5>    
                            </div> 
                            <div className="col-2">
                                
                                <h5>${prod.price}</h5>    
                            </div>
                            <div className="col-1">  
                            </div>  
                        </div>
                    </div>
   ))}
            <div className="text-center mb-5"><h4>Total Pagado: <b>${total}</b></h4></div>
            </div>

            <Link to={"/"} className="btn btn-primary my-5">Volver a la página principal</Link>
        </div>

}

export default TankYou;