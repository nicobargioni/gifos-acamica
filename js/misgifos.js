let botonModoNocturno = document.getElementById('modo-nocturno')
let body = document.getElementById('body')
let logodesktop = document.getElementById('divlogo')
let logomobile = document.getElementById('logo-nav-mobile')
let burgermobile = document.getElementById('burger-nav')
let etiquetas = document.getElementsByTagName('a')
let h3 = document.getElementsByTagName('h3')
let p = document.getElementsByTagName('p')
let trendingdiv = document.getElementById('trending')
let misgifos = document.getElementById('mis-gifos-texto')
let menu = document.getElementById('menu')
let aModoNocturno = document.getElementById('a-modonocturno')
let checkk = document.getElementById('burger-navv')
let navbar = document.getElementsByTagName('nav')

// FETCH HACIA TRENDING

fetch('https://api.giphy.com/v1/gifs/trending?api_key=p5x2giFPqjYRL2ehvqZ9ctmMD8VAH2Fl&limit=25&rating=g')
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
    trendingdiv.classList.toggle('backmain')
    


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
