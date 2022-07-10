
   
    const menu = document.getElementById('nav__menu')
    const abrir = document.getElementById('nav__btn')
    const cerrar = document.getElementById('nav__cerrar')

    

    abrir.addEventListener('click', (e) => {
      menu.classList.add('mostrar__menu')
    })

    cerrar.addEventListener('click', (e) => {
      menu.classList.remove('mostrar__menu')
})