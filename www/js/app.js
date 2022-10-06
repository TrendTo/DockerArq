const   carrito = document.querySelector('#carrito'),
        listaCursos = document.querySelector('#lista-cursos'),
        contenedorCarrito = document.querySelector('#lista-carrito tbody'),
        vaciarCarrito = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

cargarListeners();

function cargarListeners(){
    listaCursos.addEventListener('click', agregarCurso);
    vaciarCarrito.addEventListener('click', vaciar);
    carrito.addEventListener('click',borrar)
}

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerCursos(curso);
    }
}

function leerCursos(curso){

    const info_curso={
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if(articulosCarrito.some(curso => curso.id === info_curso.id)){
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === info_curso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }else{
        articulosCarrito = [...articulosCarrito, info_curso];
    }

    carritoLoad();
}

function carritoLoad(){
    
    vaciar();

    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src='${curso.imagen}' width=100></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;
        contenedorCarrito.appendChild(row);
    });

}

function vaciar(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function borrar(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const less = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== less)
    }
    carritoLoad();
}