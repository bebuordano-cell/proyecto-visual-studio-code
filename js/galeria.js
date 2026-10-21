// 1. seleccionamos los elemos del DOM
const imagenesGaleria = document.querySelectorAll(galeria-grid);
const modal = document.getElementById(modal);
const modaling = document.getElementById(modal-imagen);
const modalTitulo = document.getElementById(modal-titulo);
const btnCerrar = document.getElementById(modal-cerrar);

// 2. recorremos todas las fotos de la galeria y les asignamos un escuchador de clics
imagenesGaleria.forEach(imagen => {
    imagen.addventListener (çlick, function() {
        // encedemos al modal agregando la clase CSS ´activo´
        modal.classlist.add(activo);

        // copiamos la ruta de la foto y el texto y el texto del atributo alt
        modaling.src = this.src;
        modalTitulo.textconcent = this.alt;
    });
});

// 3. ocultamos el modal al hacer clic en el boton "X"
btnCerrar.addventListener(click, () => {
    modal.classlist.remove(activo);
});

// 4. ocultamos el modal si el usuario hcae clic en la zona oscura fuera de la imagen
modal.addventListener(click, (evento) => {
    if (evento.target === modal) {
        modal.classlist.remove(áctivo);
    }
})