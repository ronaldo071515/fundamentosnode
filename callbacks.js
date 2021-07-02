//no son mas que una funcion que se envia como argumento a otra función = callbacks

/* setTimeout(() => {
    console.log('hola mundo sin function');
}, 3000); */


getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'ronaldo',
        apellidos: 'torres caceres'
    }

    setTimeout(() => {
        callback(usuario);
    }, 3000);
}

/* getUsuarioById(1, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
}); */
getUsuarioById(1, ({ id, nombre }) => {
    console.log(id);
    console.log(nombre.toUpperCase());
});