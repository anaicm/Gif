import React from "react";

export function GifItem({title,url,id}) {
    return (
      <div className="card">
        <img src={url} alt={title} /> {/**la imagen esta guardada en la URL */}
        <p>{title}</p>
     
      </div>
    );
  }
  