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
let botonVerMas = document.getElementById('boton-vermas')
let palabraBuscada = document.getElementById('palabra-buscada')
let btnAtras = document.getElementById('btn-atras')
let btnAdelante = document.getElementById('btn-adelante')

let contImg = document.getElementById('img-search-container')
let sinResultados = document.getElementById('sinresultados')

//************************************************************/

// VARIABLES DE SUGERENCIAS - AUTOCOMPLETAR

let tituloBusqueda = document.getElementById('h3-busqueda')
let ulSugerencias = document.getElementById('sugerencias')

//************************************************************/

const API = 'p5x2giFPqjYRL2ehvqZ9ctmMD8VAH2Fl'

/*******************************************************************************/

const limpiarContenedorGifs = () => {

    if(input.value === ''){
        contImg.innerHTML = ''
        sinResultados.innerHTML = ''
        palabraBuscada.textContent = ''
    }

}

/*****************************************************************************/
// FETCH HACIA TRENDING


const fetchTrending = () =>{ 

    let offset = 800
    let limit = 3

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=${limit}&rating=g&offset=${offset}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)

        for(let i = 0 ; i < json.data.length ; i++){

            

            let gifo1 = document.getElementById('gifo1')

            let contenedorGifos = document.createElement('div')
            contenedorGifos.classList.add('gifos')



            let imagengifo1 = document.createElement('img')
            imagengifo1.src = json.data[i].images.downsized.url
            imagengifo1.classList.add('gifos')


           
            contenedorGifos.appendChild(imagengifo1)
            gifo1.appendChild(contenedorGifos)

            imagengifo1.addEventListener('mouseover', function(){

                let hoverDiv = document.createElement('div')
                
                hoverDiv.innerHTML += `
                    
                    <div class="iconos">
                        <img src="/assets/icon-fav.svg" alt="Favoritos" class="botones-min" id="botonmin1">
                        <img src="/assets/icon-max-normal.svg" alt="Maximizar" class="botones-min" id="botonmin2">
                        <img src="/assets/icon-download.svg" alt="Descargar" class="botones-min" id="botonmin3">
                    </div>

                    <div class="desc">
                        <p>${json.data[i].username}</p>
                        <p>${json.data[i].title}</p>
                    </div>

                `
                
                hoverDiv.classList.add('gifo-hover')
                
                contenedorGifos.appendChild(hoverDiv)
            })

        

            
        }

        

    })


    .catch(err => console.error('Algo falló: ' + err))
}

// FIN DE FETCH HACIA TRENDING
/*****************************************************************************/

/*******************************************************************************/
// FUNCION CAMBIAR A MODO NOCTURNO
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
// FIN FUNCION MODO NOCTURNO
/****************************************************************************/

/*****************************************************************************/
// FUNCION MOSTRAR MENU (MOBILE)
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
// FIN FUNCION MOSTRAR MENU (MOBILE)
/****************************************************************************/

/*****************************************************************************/
// FUNCION MOSTRAR GIFS
const mostrarGifs = () => {

    let busquedaMostrar = input.value
    let limit = 12
    let offset = 0

    palabraBuscada.textContent = busquedaMostrar
    
    limpiarContenedorGifs()

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${busquedaMostrar}&limit=${limit}&offset=${offset}&rating=g&lang=es`)
        .then(response => response.json())
        .then(json => {

            if(json.data.length < 1){

                let sinresultados = document.getElementById('sinresultados')

                let divSinResultados = document.createElement('div')
                divSinResultados.innerHTML += `
                
                <div class="sinresultados">

                    <h2 class="sinrh2">${busquedaMostrar}</h2>
                    <img class="logosinresultados" src="./assets//icon-busqueda-sin-resultado.svg" alt="Sin resultados">
                    <h3 class="sinrh3">Intenta con otra búsqueda</h3>

                </div>
                
                `
                sinresultados.appendChild(divSinResultados)
                
            
        }else{

            for(let i = 0; i < json.data.length ; i++){
                
                let contenedorSearch = document.createElement('div')
                contenedorSearch.classList.add('gif')

                let imgIn = document.createElement('img')
                imgIn.classList.add('gif')
                imgIn.src = json.data[i].images.downsized.url
                contenedorSearch.appendChild(imgIn)

                contImg.appendChild(contenedorSearch)
                

                imgIn.addEventListener('mouseover', function(){

                    let hoverDiv = document.createElement('div')
                
                    hoverDiv.innerHTML += `
                        
                        <div class="gifossearch">
                            <div class="iconossearch">
                                <img src="/assets/icon-fav.svg" alt="Favoritos" class="botones-min" id="botonmin1">
                                <img src="/assets/icon-max-normal.svg" alt="Maximizar" class="botones-min" id="botonmin2">
                                <img src="/assets/icon-download.svg" alt="Descargar" class="botones-min" id="botonmin3">
                            </div>
                            <div class="descsearch">
                            <p>${json.data[i].username}</p>
                            <p>${json.data[i].title}</p>
                            </div>
                        </div>

                        `
                    
                    
                    
                    contenedorSearch.appendChild(hoverDiv) 

                })

            }

        }
    
    
    
    
    })
    
    .catch(err => console.error('Algo falló: ' + err))

    botonVerMas.style.display = 'inline'

    botonVerMas.addEventListener('click', function(){


        offset += 12

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${busquedaMostrar}&limit=${limit}&offset=${offset}&rating=g&lang=es`)
        .then(response => response.json())
        .then(json => {

            
            for(let i = 0; i < json.data.length ; i++){
                
                let contenedorSearch = document.createElement('div')
                contenedorSearch.classList.add('gif')

                let imgIn = document.createElement('img')
                imgIn.classList.add('gif')
                imgIn.src = json.data[i].images.downsized.url
                contenedorSearch.appendChild(imgIn)

                contImg.appendChild(contenedorSearch)
                

                imgIn.addEventListener('mouseover', function(){

                    let hoverDiv = document.createElement('div')
                
                    hoverDiv.innerHTML += `
                        
                        <div class="gifossearch">
                            <div class="iconossearch">
                                <img src="/assets/icon-fav.svg" alt="Favoritos" class="botones-min" id="botonmin1">
                                <img src="/assets/icon-max-normal.svg" alt="Maximizar" class="botones-min" id="botonmin2">
                                <img src="/assets/icon-download.svg" alt="Descargar" class="botones-min" id="botonmin3">
                            </div>
                            <div class="descsearch">
                            <p>${json.data[i].username}</p>
                            <p>${json.data[i].title}</p>
                            </div>
                        </div>

                        `
                    
                    
                    
                    contenedorSearch.appendChild(hoverDiv) 

                })

            }
        })
    
        .catch(err => console.error('Algo falló: ' + err))

        

    })
    
}
// FIN FUNCION MOSTRAR GIFS
/****************************************************************************/

/*****************************************************************************/
// FUNCION AUTOCOMPLETAR
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
                palabraCreada.classList.add('p-busqueda-open')
                sugerenciaLi.classList.add('li-busqueda-open')
                palabraCreada.textContent = json.data[i].name
                sugerenciaLi.appendChild(palabraCreada)
                ulSugerencias.appendChild(sugerenciaLi)

                sugerenciaLi.addEventListener('click', function(){

                    input.value = palabraCreada.textContent
                    ulSugerencias.classList.remove('sugerencias-on')

                })
                
            }
            
    }).catch(err => console.error('Algo falló: ' + err))
    
    if(busqueda !== ''){
        ulSugerencias.classList.add('sugerencias-on')
    }else{
        ulSugerencias.classList.remove('sugerencias-on')
    }

}
// FIN FUNCION AUTOCOMPLETAR
/***********************************************************************/

/*****************************************************************************/
// FUNCION SCROLL
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
// FIN FUNCION SCROLL
/*****************************************************************************/

/*****************************************************************************/
// FUNCION PASAR GIFS ADELANTE
const pasarGifsAdelante = () => {

    offset += 3

    let gifo1 = document.getElementById('gifo1')
    gifo1.innerHTML = ''
    fetchTrending()
    
    

}


const pasarGifsAtras = () => {

    offset -= 3

    let gifo1 = document.getElementById('gifo1')
    gifo1.innerHTML = ''
    fetchTrending()

}


fetchTrending();

burgermobile.addEventListener('click', mostrarMenu)
botonModoNocturno.addEventListener('click', cambiarnocturno)
aModoNocturno.addEventListener('click', cambiarnocturno)
input.addEventListener('keyup', autocompletar)


input.addEventListener('keyup', limpiarContenedorGifs)
// Para que se borre todo el contenedor de gifs despues de buscar algo al borrar completamente el input

// SOLAMENTE LA LUPA Y LA TECLA ENTER MUESTRAN LOS GIFS 
lupa.addEventListener('click', mostrarGifs)
lupa.addEventListener('click', limpiarContenedorGifs)
// Porque si no limpio el contenedor, cuando vuelva a buscar algo y de click en la lupa,
// se va a seguir viendo la busqueda anterior (los otros 12)

btnAdelante.addEventListener('click', pasarGifsAdelante)
btnAtras.addEventListener('click', pasarGifsAtras)
