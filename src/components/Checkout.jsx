import { addDoc, collection, getFirestore } from "firebase/firestore";
import React,{useContext,useState} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { ThemeContext } from "./context/ThemeContext";

const Checkout = ()=>{

    const {carrito,clear,sumTotal} = useContext(CartContext);
    const {dark} = useContext(ThemeContext);
    const [nombre, setNombre] = useState("");
    const [nombreError,setNombreError] = useState("");
    const [telefono, setTelefono] = useState("");
    const [telefonoError,setTelefonoError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const [orderId, setOrderId] = useState("");

    

    
    const validarForm = ()=>{

        const validarEmail= /\w+@\w+\.+[a-z]/;

        setNombreError("");
        setEmailError("");
        setTelefonoError("");


        if(nombre === ""){

            setNombreError("Campo Obligatorio*");
            
            
        }else if( telefono === "" && email === ""){

                setTelefonoError("Campo Obligatorio*");
                setEmailError("Campo Obligatorio*");

        }else if( telefono === ""){

            setTelefonoError("Campo Obligatorio*");
            

        }else if(email === ""){

                setEmailError("Campo Obligatorio*");
            
        }else if(isNaN(telefono)){ 

                setTelefonoError("Ingrese un caracter válido*");

        }else if(telefono.length < 5 || telefono.length > 15){

                setTelefonoError("Introduzca un número de teléfono válido*(mínimo 6 caracteres,máximo 15 caracteres)");


        }else if(!validarEmail.test(email)){

            
            setEmailError("Formato de email no válido*(debe contener @ y .com)")
            

        }else{

            generarOrden();

        }


    }

    const generarOrden=()=>{

       

        

        const fecha = new Date();
        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items:carrito.map(prod => ({id:prod.id,title:prod.nombre,quantity:prod.cantidad,price:prod.precio,price_total:prod.precio * prod.cantidad,img:prod.img})),
            total:sumTotal(),
            order_date:`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
            
        };
        
        const db = getFirestore(); //obtengo la base de datos
        const orderCollection = collection(db,"orders"); //hago una conección con la coleccion "orders"
        addDoc(orderCollection,order).then((orden)=> setOrderId(orden.id)); //subo la orden a la colección "orders"

        clear()

    
}

return <>
<div className="container mt-3">
    <h1 className="text-center alert alert-primary">Estás a un paso de terminar tu compra!!</h1>
</div>
<div className={`container row container-checkout ${dark ?"text-white":""}`} >

    <div className="col-6 width-100"> 
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
    <div className="col-6 width-100">
    {carrito.map(prod =>(
    <div className="col-12 container border-top" key={prod.id}>
        
            
        <div className="row mb-5 align-items-center border-bottom checkout-carrito">
            <div className="col-4 text-center width-auto">
                <img src={prod.img} width={120} alt={prod.nombre} />
            </div>
            <div className="col-3 width-auto">
                
                <h5>{prod.nombre}</h5>    
            </div>    
            <div className="col-2 text-center width-auto">
                
                <h5>x{prod.cantidad}</h5>    
            </div> 
            <div className="col-2 width-auto">
                
                <h5>${prod.precio}</h5>    
            </div>
            <div className="col-1 width-auto">  
            </div>  
        </div>
    </div>
   ))}
   <div className="text-end text-centrado mb-5"><h4>Total a Pagar: <b>${sumTotal()}</b></h4></div>
   </div>
   </div>
   <div className="text-center">
        
            {orderId !== "" ? <Navigate to={"/tankyou/" + orderId}/> : ""}
        
   </div>
   
   </>
}

export default Checkout;