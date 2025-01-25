window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form')
    const input = document.getElementById('new-task-input')
    const listEl = document.getElementById('tasks')

    form.addEventListener('submit', (event) => {
        //Para evitar que recarge la pagina
        event.preventDefault()
        
        //Capturamos el elemento del input
        const task = input.value;

        //Creando card de la tarea
        const taskEl = document.createElement('div')
    })
})