//Un Hooks no es más que una función que regresa algo
import { useState, useEffect } from "react";
import { getGif } from "../helpest/getGifs";


export function useFetchGif(category){//Hook creado para el componente GrifGrid

    //codigo que se encontraba en el componente GrifGrid
    const [imagen, setImagen]=useState([]);
    const [isLoading, setIsLoading]=useState(true);//cuando carga por primera vez esta en true


    const getImagen = async()=>{
  
      const newImagen = await getGif(category);
      setImagen(newImagen);
      setIsLoading(false);//cuando deja de cargar es false
    }
   
    useEffect(()=>{
          getImagen();
        },[]);

    return{
        imagen,// tambien funciona de esta forma imagen: imagen,
        isLoading//regresa true ya que no hace falta ponerlo isLoading:true
    }
   
  }
  