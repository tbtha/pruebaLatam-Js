
const botonRegistrar = document.getElementById("btnRegistrar")
const seleccionAnimal = document.getElementById("animal")
const previewImg = document.getElementById("preview")

//consulta de datos 
const getDatos = async() => {
    const url = "http://127.0.0.7:5501/animales.json"
    const response = await fetch(url)
    const {animales} = await response.json()
    return animales
}



seleccionAnimal.addEventListener('change' , async () => {
    previewImg.textContent = ""
    const animales = await getDatos()
    const animal = animales.find((animal) => animal.name == seleccionAnimal.value)
    previewImg.style.backgroundImage = `url(./assets/imgs/${animal.imagen})`

})


