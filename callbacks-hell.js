//hell => el infierno de los callbacks, errores

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

const id = 10;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if (empleado) {
        return callback(null, empleado);
    }
    callback(`El empleado con id ${ id } no existe en la base de datos`);
}

const getSalario = (id, callback) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    if (salario) {
        return callback(null, salario);
    } else {
        callback(`No existe salario para el empleado con id: ${ id }`);
    }
}


getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
	getSalario(id, (err, salario) => {
		if (err) {
			return console.log(err);
		}
		console.log('El empleado', empleado, 'Tiene un salario de :', salario, 'dolares');
	})
});

