/* Desestructuración de objetos */

const deadpool = {
        nombre: 'Wade',
        apellido: 'Winston',
        poder: 'Regeneración',
        //edad: 50,
        /*     getNombre: function() {
                return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
            } */
        getNombre() {
            return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
        }
    }
    /* console.log(deadpool.getNombre()) */
    //const nombre = deadpool.nombre
    //const apellido = deadpool.apellido
    //const poder = deadpool.poder

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) { 
	//desestructurar el objeto dentro del argumento
    console.log(nombre, apellido, poder, edad);
}

/* imprimeHeroe(deadpool); */

//const { nombre, apellido, poder, edad = 0 } = deadpool; //desestructuración
//console.log(nombre, apellido, poder, edad);

/* console.log(deadpool.getNombre()) */

const heroes = ['DeadPool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

//const [h1, h2, h3] = heroes; //desestructurar arreglo

function arregloHeroe([h1, h2, h3]) {
    console.log(h1, h2, h3);
}

arregloHeroe(heroes)