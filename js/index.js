let botonModoNocturno = document.getElementById('modo-nocturno')
let body = document.getElementById('body')
let burgermobile = document.getElementById('burger-nav')
let navbar = document.getElementsByTagName('nav')
let lupa = document.getElementById('lupa')
let input = document.getElementById('search')
let menu = document.getElementById('menu')
let aModoNocturno = document.getElementById('a-modonocturno')
let etiquetas = document.getElementsByTagName('a')
let h3 = document.getElementsByTagName('h3')
let p = document.getElementsByTagName('p')
let logodesktop = document.getElementById('divlogo')
let logomobile = document.getElementById('logo-nav-mobile')
let titulo = document.getElementById('titulo')
let trendingdiv = document.getElementById('trending')

const API = 'p5x2giFPqjYRL2ehvqZ9ctmMD8VAH2Fl'

// FETCH HACIA TRENDING

fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=3&rating=g`)
    .then(response => response.json())
    .then(json => {


        for(let i = 0 ; i < json.data.length ; i++){

            let gifo1 = document.getElementById('gifo1')
            let imagengifo1 = document.createElement('img')
            imagengifo1.src = json.data[i].images.downsized.url
            imagengifo1.classList.add('gifos')
            imagengifo1.style.width = '300px'
            imagengifo1.style.height = '250px'
            gifo1.appendChild(imagengifo1)

        }

    })


.catch(err => console.error('Algo falló: ' + err))





const cambiarnocturno = () => {

    for(let i = 0 ; i < etiquetas.length ; i++){

        etiquetas[i].classList.toggle('texto-nocturno')

    }

    for(let i = 0 ; i < h3.length ; i++){

        h3[i].classList.toggle('texto-nocturno')

    }

    for(let i = 0 ; i < p.length ; i++){

        p[i].classList.toggle('texto-nocturno')

    }

    for(let i = 0 ; i < navbar.length ; i++){

        navbar[i].classList.toggle('oscuro')

    }

    
    logomobile.classList.toggle('divlogo-nocturno')
    logodesktop.classList.toggle('logo-nocturno')
    body.classList.toggle('oscuro')
    input.classList.toggle('buscador-nocturno')
    titulo.classList.toggle('texto-nocturno')
    trendingdiv.classList.toggle('backmain')
    lupa.classList.toggle('lupa-nocturno')
    


    if(burgermobile.getAttribute('src') === './assets/close.svg'){

        burgermobile.setAttribute('src', './assets/close-modo-noct.svg')

    }else if(burgermobile.getAttribute('src') === './assets/close-modo-noct.svg'){

        burgermobile.setAttribute('src', './assets/close.svg')

    }

}

const mostrarMenu = () => {

    
    if(burgermobile.getAttribute('src') === './assets/burger.svg'){

        burgermobile.setAttribute('src', './assets/close.svg')

    }else if(burgermobile.getAttribute('src') === './assets/close.svg'){

        burgermobile.setAttribute('src', './assets/burger.svg')
    }

    if(burgermobile.getAttribute('src') === './assets/close-modo-noct.svg'){

        burgermobile.setAttribute('src', './assets/burger-modo-noct.svg')
        console.log('ssssssss')

    }else if(burgermobile.getAttribute('src') === './assets/burger-modo-noct.svg'){

        burgermobile.setAttribute('src', './assets/close-modo-noct.svg')

    }

    console.log('muestra')
    menu.classList.toggle('mostrar-menu')

}

const mostrarGifs = () => {
    
    //FETCH SEARCH - TRAE LOS GIFS

    let busquedaMostrar = input.value

    
    let contImg = document.getElementById('img-search-container')

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=p5x2giFPqjYRL2ehvqZ9ctmMD8VAH2Fl&q=${busquedaMostrar}&limit=25&offset=0&rating=g&lang=es`)
        .then(response => response.json())
        .then(json => {
            
            
            console.log(json)
            
            for(let i = 0; i < json.data.length ; i++){
                
                
                let imgIn = document.createElement('img')
                imgIn.style.width = '200px'
                imgIn.style.height = '200px'
                imgIn.src = json.data[i].images.downsized.url
                contImg.appendChild(imgIn)
            }
        })
    
    .catch(err => console.error('Algo falló: ' + err))

    
}

let tituloBusqueda = document.getElementById('h3-busqueda')
let ulSugerencias = document.getElementById('sugerencias')

/* const busquedaAnimacion = () => {

    busqueda = input.value
    if(busqueda !== ''){
        ulSugerencias.classList.add('sugerencias-on')
    }

}
busquedaAnimacion() */



const autocompletar = () => {

    busqueda = input.value
    
    ulSugerencias.innerHTML = ''
    let autocomplete = fetch(`https://api.giphy.com/v1/tags/related/${busqueda}?api_key=${API}&limit=4`)
                   .then(response => response.json())
                    
    autocomplete.then(json => {
            
        console.log(json)

            for(let i = 0; i < json.data.length; i++){

                let palabraCreada = document.createElement('p')
                let sugerenciaLi = document.createElement('li')
                palabraCreada.textContent = json.data[i].name
                sugerenciaLi.appendChild(palabraCreada)
                ulSugerencias.appendChild(sugerenciaLi)
                
            }
            
            
    }).catch(err => console.error('Algo falló: ' + err))
    ulSugerencias.classList.add('sugerencias-on')
    
}


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('nav-desktop').classList.add('sticky');
      document.getElementById('nav-mobile').classList.add('sticky');
    } else {
      document.getElementById('nav-desktop').classList.remove('sticky');
      document.getElementById('nav-mobile').classList.remove('sticky');
    }
}

window.onscroll = function () {
    scrollFunction();
  };




burgermobile.addEventListener('click', mostrarMenu)
botonModoNocturno.addEventListener('click', cambiarnocturno)
aModoNocturno.addEventListener('click', cambiarnocturno)
input.addEventListener('keyup', autocompletar)

// SOLAMENTE LA LUPA Y LA TECLA ENTER MUESTRAN LOS GIFS 
lupa.addEventListener('click', mostrarGifs)



