const menu = document.querySelector('.hamburgesa')
const navegacion = document.querySelector('.navegacion')

document.addEventListener('DOMContentLoaded', () => {
    eventos()
})

const eventos = () => {
    menu.addEventListener('click', desplegarMenu)
}

const desplegarMenu = () => {
    navegacion.classList.remove('ocultar')
    botonCerrar();
}

const botonCerrar = () => {
    let btnCerrar = document.createElement('p');
    let overlay = document.createElement('div')
    overlay.classList.add('pantalla-completa')
    let body = document.querySelector('body')
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay)
    btnCerrar.textContent = "x"
    btnCerrar.classList.add('btn-cerrar')

    navegacion.appendChild(btnCerrar)
    cerrarMenu(btnCerrar, overlay)
}

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar')
        overlay.remove()
        boton.remove()
    });

    overlay.onclick = function() {
        navegacion.classList.add('ocultar')
        overlay.remove()
        boton.remove()
    }

}

