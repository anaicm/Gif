import React from "react";
import { GifItem } from "./gifItem";
import { useFetchGif } from "../Hook/useFetchGif";

export function GrifGrid({category}) {

  const {imagen, isLoading}=useFetchGif(category);

  return (
      <>
        <h3>{category}</h3>
        {
          //si isLoading esta en tru isLoading?true muestra el loading pero si no null
          isLoading ? (<h2>Loading...</h2>):null
          //esto se puede hacer tambien un condicional corto 
          //isLoading && (<h2>Loading...</h2>) si esta en true muestra el mensaje
        }
          <div className="card-grid">
          {
            imagen.map((img)=>(
              <GifItem
               key={img.id}
               title={img.title}
               url={img.url}
               />
            ))
          }
          </div> 
      </>
    );
  }
  