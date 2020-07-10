const inquirer = require('inquirer');
// npm install inquirer
async function main() {
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa Tu Aombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa Tu Edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    }catch (e) {
        console.error(e);
    }

}

main();
