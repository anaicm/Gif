import React, { useState } from "react";

export function AddCategory({newValueCategory}) {

    const [value, setValue]=useState('');
  
    const cambio=(event)=>{
      setValue(event.target.value);
    }
    //Con el evento onSubmit se pasa el valor del formulario 
    const onSubmit=(event)=>{
      event.preventDefault();
      
      if(value.trim().length <= 1)
        return;
        newValueCategory(value.trim());
        setValue('');
    }
    return (
      <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={value}
            onChange={cambio}
        
        />
     
      </form>
    );
  }