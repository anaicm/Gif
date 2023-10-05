import React, { useState } from "react";
import { AddCategory, GrifGrid } from "./";//cuando el nombre es index no hace falta ponerlo

export function GifExpertApp() {

 const [categories, setCategories]=useState(['']);
 
 const onAddCategory=(newValueCategory)=>{
  
    if(categories.includes(newValueCategory))
    return; 

    setCategories([ newValueCategory,...categories])
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
  
  