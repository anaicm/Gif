    //El código se puede hacer en un archivo aparte del componente, por parámetro recibe la categoria 
    //por lo que la función debe exportarse para usar en otro lugar.
    export const getGif = async(category)=>{
        const url=`https://api.giphy.com/v1/gifs/search?api_key=d4kIiqbgW524L11WFQkGnCYsw5iMPz4C&q=${category}&limit=10`;
        const respuesta = await fetch(url);
        const {data}=await respuesta.json();
        const gifs = data.map(img=>({
            id:img.id, 
            title:img.title,
            url:img.images.downsized_medium.url

        }))
        
        return gifs;
    }
