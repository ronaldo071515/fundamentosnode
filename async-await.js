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


const getInfoUsuario = async(id) => {

	try {
		const empleado = await getEmpleado(id);
		const salario = await getSalario(id);
		return `El salario del empleado ${empleado} es: ${salario} pesos`;
	} catch (error) {
		throw error;
	}

}

const id = 3;

getInfoUsuario(id)
	.then(msg => {
		console.log('todo okay');
		console.log(msg);
	})
	.catch(err => {
		console.log('todo malo');
		console.log(err);
	});


