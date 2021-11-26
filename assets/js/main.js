import { Aguila, Leon, Lobo, Oso, Serpiente } from "./animales.js";


const formulario = document.getElementById("formulario")
const previewImg = document.getElementById("preview")
const tabla = document.getElementById("Animales")
const alerta = document.getElementById("alerta")

let arrayAnimales = [] 

formulario.addEventListener('submit', e => {
    e.preventDefault()
    alerta.textContent= "";
    // obtener imagen
    const fuenteImg = previewImg.style.backgroundImage
    const direccionImg = fuenteImg.slice(5, fuenteImg.length -2) 

    // obtener datos form
    const data = new FormData(formulario)
    const objetoData = Object.fromEntries([...data.entries()])
    objetoData.id = `id-${Date.now()}`
    let nuevoAnimal;

    // validar que todos los campos tengan valor
    if(objetoData.animal === '' || objetoData.edad  === '' || objetoData.comentarios === ''){
       
        return alerta.innerHTML = `
        <div class="alert alert-warning" role="alert">
        El formulario no puede contener ningún campo vacío.
        </div>
        `
    }
  
    


    // instancia
    if(objetoData.animal == "Oso"){
        nuevoAnimal = new Oso (objetoData.animal, objetoData.edad , direccionImg ,objetoData.comentarios, objetoData.id)
    }if(objetoData.animal == "Aguila"){
        nuevoAnimal = new Aguila (objetoData.animal, objetoData.edad , direccionImg ,objetoData.comentarios,objetoData.id)
    }if(objetoData.animal == "Leon"){
        nuevoAnimal = new Leon (objetoData.animal, objetoData.edad , direccionImg ,objetoData.comentarios, objetoData.id)
    }if(objetoData.animal == "Serpiente"){
        nuevoAnimal = new Serpiente (objetoData.animal, objetoData.edad , direccionImg ,objetoData.comentarios, objetoData.id)
    }if(objetoData.animal == "Lobo"){
        nuevoAnimal = new Lobo (objetoData.animal, objetoData.edad , direccionImg ,objetoData.comentarios, objetoData.id)
    }

    arrayAnimales.push(nuevoAnimal)
    console.log(arrayAnimales)

    // insertar imagen 
    insertarImg()
    


    // reset form
    formulario.reset()
    previewImg.style.backgroundImage = ""


})


const insertarImg = () => {
    tabla.textContent = ""
    arrayAnimales.forEach((animal) => {
        // pintando imagen en tabla
        console.log(animal)
        const imagen = document.createElement("img")

        imagen.src = `${animal.img}`
        imagen.style.maxWidth = "150px"
        imagen.className = "imagenModal m-1 col-4"
        imagen.dataset.index = `#${animal.id}`
        tabla.appendChild(imagen)

        
  
    })
}




// tabla.addEventListener('click' , (e) => {
//     if(e.target.matches('img')){
//     console.log('click para abrir modal ')
   

//     }
// })
