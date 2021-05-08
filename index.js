
const cargarPersonajes = async function(){
    //Llamar a la api
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    let personajes = res.data.results;
    personajes.forEach(p =>{
        console.log(p.name);
    })
};

document.addEventListener("DOMContentLoaded", () =>{
    // Se ejecutará cuando se cargue la pagina
    cargarPersonajes();
});