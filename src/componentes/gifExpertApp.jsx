import React, { useState } from "react";
import { AddCategory } from "./input";//importar el componente input
import { GrifGrid } from "./girGrid";

export function GifExpertApp() {

 const [categories, setCategories]=useState(['One Punch', 'Dragron Boll']);
 
 const onAddCategory=(newValueCategory)=>{
    if(categories.includes(newValueCategory))
    return; 

    setCategories([...categories, newValueCategory])
}
   return (
      <>
      {/**Título */}
       <h1>Gif Expert App</h1>
      {/**Input (Búsqueda) */}
        <AddCategory 
          newValueCategory={onAddCategory}
        /> 
      {/**Listado de items (Gif, en este caso ) */}
        {categories.map(category=>(
          <GrifGrid key={category}
                    category={category}/>//categoria que entra por parámetro
          ))
        }
      {/**Lista de gif */}     
      </>
    );
  }
  
  