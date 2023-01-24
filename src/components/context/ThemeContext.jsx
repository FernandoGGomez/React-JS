import React,{ createContext,useState,useEffect } from "react";



export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) =>{

    const theme = JSON.parse(localStorage.getItem("theme")) || false; //si tengo preferencias guardadas en local storage cargo esas preferencias
    const [dark,setDark] = useState(theme);
    

    useEffect(()=>{

     
        localStorage.setItem("theme",JSON.stringify(theme))
  
        const body = document.getElementById("body");
      
        if (theme){
            
            body.style.backgroundColor="#212529"
            
        }else{
            body.style.backgroundColor="#FFFFFF"
        }
       
    },[dark])

    const tema = ()=>{

        setDark(!theme)

        const body = document.getElementById("body");
      
        if (theme){
            
            body.style.backgroundColor="#212529"
            
        }else{
            body.style.backgroundColor="#FFFFFF"
        }

        localStorage.setItem("theme",JSON.stringify(!theme));
        
        
    }

    return (
        <ThemeContext.Provider value={{tema,dark}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;