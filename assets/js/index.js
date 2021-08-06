import {Leon, Lobo, Oso, Serpiente, Aguila} from "./animals.js"

// import * as Animals from "./animals.js"

(async () => {
  const Response = await fetch("/animales.json");
  const { animales: Animales } = await Response.json();
  
  const nombreAnimalElement = document.getElementById("animal")
  const edadAnimalElement = document.getElementById("edad")
  const comentariosAnimalElement = document.getElementById("comentarios")

  const previewAnimalElement = document.getElementById("preview")
  const btnRegistrarElement = document.getElementById("btnRegistrar")

  const cardAnimal = document.getElementById("cardAnimal")

  const animalesContainerElements = document.getElementById("Animales")
  const playerElement = document.getElementById("player")
  const modalElement = document.getElementById("modal")


  const animalsCards = []

  
  nombreAnimalElement.addEventListener("change", function() {
    const nombreAnimal = nombreAnimalElement.value;
    const animalEncontrado = Animales.find(animal => animal.name === nombreAnimal)

    previewAnimalElement.setAttribute("src", `/assets/imgs/${animalEncontrado.imagen}`)
  })

  btnRegistrarElement.addEventListener("click", () => {
    const nombreAnimal = nombreAnimalElement.value;
    const edadAnimal = edadAnimalElement.value
    const comentariosAnimal = comentariosAnimalElement.value

    const animalEncontrado = Animales.find(animal => animal.name === nombreAnimal)

    const params = [nombreAnimal,edadAnimal, animalEncontrado.imagen, comentariosAnimal, animalEncontrado.sonido]

    switch(nombreAnimal){
      case "Leon": 
        animalsCards.push(new Leon(...params))
        break;
      case "Lobo":
        animalsCards.push(new Lobo(...params))
        break;
      case "Oso":
        animalsCards.push(new Oso(...params))
        break;
      case "Serpiente":
        animalsCards.push(new Serpiente(...params))
        break;
      case "Aguila":
        animalsCards.push(new Aguila(...params))
        break;
    }

    render();


  })

  function render() {
    animalesContainerElements.innerHTML = "";

    animalsCards.forEach(animal => {
      const divContainer = document.createElement("div")
      const imgImagen = document.createElement("img")
      const divCardBoton = document.createElement("div")

      divContainer.classList.add("card")

      imgImagen.setAttribute("src", `/assets/imgs/${animal.Img}`)
      imgImagen.classList.add("img-small")

      divCardBoton.classList.add("card-footer", "p-0")
      divCardBoton.innerHTML = `
      <button class="btn btn-primary btn-block">
      <img src="assets/imgs/audio.svg" style="width: 10px"/></button>
      `

      imgImagen.addEventListener("click", () => {
        $("#modal").modal("show")

        const modalBodyElement = document.querySelector("#modal  .modal-body")
        modalBodyElement.innerHTML = `
        <img src="/assets/imgs/${animal.Img}" class="img-fluid" />
        <p class="text-light text-center">${animal.Nombre}</p>
        <hr class="my-0 bg-dark w-75 mx-auto" />
        <p class="text-light text-center">${animal.Edad}</p>
        <hr class="my-0 bg-dark w-75 mx-auto" />
        <p class="text-light text-center">${animal.Comentarios}</p>
        `
      })

      divCardBoton.addEventListener("click", () => {
        switch(animal.Nombre){
          case "Leon": animal.Rugir()
            break;
          case "Lobo": animal.Aullar()
            break;
          case "Oso": animal.Grunir()
            break;
          case "Serpiente": animal.Sisear()
            break;
          case "Aguila": animal.Chillar()
            break;
        }
      })

      divContainer.appendChild(imgImagen);
      divContainer.appendChild(divCardBoton);


      animalesContainerElements.appendChild(divContainer);
    })
  }
})();






