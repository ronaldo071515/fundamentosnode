const empleados = [{
        id: 1,
        nombre: 'Ronaldo',
        apellidos: 'Torres Cáceres'
    },
    {
        id: 2,
        nombre: 'monica',
        apellidos: 'galindo xd'
    },
    {
        id: 3,
        nombre: 'Eladio',
        apellidos: 'ler res'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


const getEmpleado = (id) => {
    return promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;

        /* 		if (empleado) {
        			resolve(empleado);
        		} else {
        			reject(`No existe el empleado con id: ${id}`)
        		} */
        /* Usando ternarios para evaluar */
        (empleado) ?
        resolve(empleado): reject(`No existe el empleado con id: ${id}`)
    });
}

const getSalario = (id) => {
    return promesa = new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ?
        resolve(salario): reject(`No existe salario para el id: ${id}`)
    });
}


const id = 19;

/* getEmpleado(id)
	.then( emp => console.log(emp))
	.catch( err => console.log(err))

getSalario(id)
	.then( sal => console.log(sal))
	.catch( err => console.log(err)) */

/* getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
            })
            .catch(err => console.log(err));
    }).catch(err => console.log(err)); */


	/* --------PROMESAS EN CADENA */

let nombre;

getEmpleado(id)
	.then(empleado =>{ 
		nombre = empleado;
		return getSalario(id)
	})
	.then( salario => console.log('El empleado:', nombre, 'tiene un salario de: ', salario))
	.catch(err => console.log(err));