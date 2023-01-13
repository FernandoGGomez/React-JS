import { addDoc, collection, getFirestore } from "firebase/firestore";
import React,{useContext,useState,useEffect} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = ()=>{

    const {carrito,cartTotal,clear,sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [nombreError,setNombreError] = useState("");
    const [telefono, setTelefono] = useState("");
    const [telefonoError,setTelefonoError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const [orderId, setOrderId] = useState("");

    useEffect(()=>{




    },[])


    const validarForm = ()=>{

        if(nombre == ""){

            setNombreError("Campo Obligatorio*");
            
            
        }else if( telefono == ""){

                setTelefonoError("Campo Obligatorio*");

        }else if(email == ""){

                setEmailError("Campo Obligatorio*");
            
        }else if(isNaN(telefono)){ 

                setTelefonoError("Ingrese un caracter válido*");

        }else if(telefono.length < 5 || telefono.length > 15){

                setTelefonoError("Introduzca un número de teléfono válido*");


        }else if(!email.includes("@") || !email.includes(".com")){

            setEmailError("Email no válido*")

        }else{

            generarOrden();

        }


    }

    const generarOrden=()=>{

       

        

        const fecha = new Date();
        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items:carrito.map(prod => ({id:prod.id,title:prod.nombre,quantity:prod.cantidad,price:prod.precio,price_total:prod.precio * prod.cantidad})),
            total:sumTotal(),
            order_date:`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
            
        };
        
        const db = getFirestore();
        const orderCollection = collection(db,"orders");
        addDoc(orderCollection,order).then((orden)=> setOrderId(orden.id));
        console.log(orderId)

        clear()

    
}

return <>
<div className="container row" style={{height:"56vh",marginLeft: "15%", marginTop: "5%"}}>

    <div className="col-6"> 
                <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                            <p className="text-danger">{nombreError}</p>
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono:</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su Teléfono"  onInput={(e) => {setTelefono(e.target.value)}} />
                            <p className="text-danger">{telefonoError}</p>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                            <p className="text-danger">{emailError}</p>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={validarForm}>Generar Orden</button>
                </form>
    </div>
    <div className="col-6">
    {carrito.map(prod =>(
    <div className="col-12 container border-top" key={prod.id}>
        
            
        <div className="row mb-5 align-items-center border-bottom">
            <div className="col-4 text-center">
                <img src={prod.img} width={120} alt={prod.nombre} />
            </div>
            <div className="col-3">
                
                <h5>{prod.nombre}</h5>    
            </div>    
            <div className="col-2 text-center">
                
                <h5>x{prod.cantidad}</h5>    
            </div> 
            <div className="col-2">
                
                <h5>${prod.precio}</h5>    
            </div>
            <div className="col-1">  
            </div>  
        </div>
    </div>
   ))}
   <div className="text-end mb-5"><h4><u>Total a Pagar:</u> <b>${sumTotal()}</b></h4></div>
   </div>
   </div>
   <div className="text-center">
        
            {orderId !== "" ? <Navigate to={"/tankyou/" + orderId}/> : ""}
        
   </div>
   
   </>
}

export default Checkout;