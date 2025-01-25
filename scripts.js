window.addEventListener("load", () => {
  const form = document.getElementById("new-task-form");
  const input = document.getElementById("new-task-input");
  const listEl = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    //Para evitar que recarge la pagina
    event.preventDefault();

    //Capturamos el elemento del input
    const task = input.value.trim();

    if (task === '') {
        alert('Completa los campos');
        return;
    } 

    //Creando card de la tarea
    const taskEl = document.createElement("div");
    taskEl.classList.add("card", "mb-3", "bg-secondary");

    const taskBodyEl = document.createElement('div');
    taskBodyEl.classList.add('card-body', 'd-flex', 'align-items-center');

    const taskContentEl = document.createElement('div');
    taskContentEl.classList.add('flex-grow-1', 'me-3');

    const taskInputEl = document.createElement('input');
    taskInputEl.type = 'text';
    taskInputEl.classList.add('form-control-plaintext', 'text-light', 'fs-5');
    taskInputEl.value = task;
    taskInputEl.setAttribute('readonly', 'readonly');


    //Construir el elemento de adentro hacia fuera
    taskContentEl.appendChild(taskInputEl);
    taskBodyEl.appendChild(taskContentEl);

    const taskActionsEl = document.createElement('div');
    taskActionsEl.classList.add('actions', 'd-flex');

    //Creando boton de editar
    const containerEdit = document.createElement('div');
    containerEdit.classList.add('bg-primary', 'p-1', 'rounded', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center', 'bg-edit-hover', 'fixed-size')

    const taskEditEl = document.createElement('button');
    taskEditEl.classList.add('btn', 'btn-link', 'text-decoration-none', 'text-light', 'btn-sm');
    taskEditEl.innerHTML = '<i class="fas fa-edit"></i>';

    containerEdit.appendChild(taskEditEl);

    //Creando boton de editar
    const containerDelete = document.createElement('div');
    containerDelete.classList.add('bg-danger', 'p-1', 'rounded', 'd-flex', 'justify-content-center', 'align-items-center', 'bg-delete-hover', 'fixed-size');

    const taskDeleteEl = document.createElement('button');
    taskDeleteEl.classList.add('btn', 'btn-link', 'text-decoration-none', 'text-light', 'btn-sm')
    taskDeleteEl.innerHTML = '<i class="fas fa-trash"></i>'

    //Terminando de construir nuestro elemento task
    containerDelete.appendChild(taskDeleteEl);

    taskActionsEl.appendChild(containerEdit);
    taskActionsEl.appendChild(containerDelete);
    taskBodyEl.appendChild(taskActionsEl);
    taskEl.appendChild(taskBodyEl);
    listEl.appendChild(taskEl)

    input.value = ''
    
    //Funcion para editar la tarea
    containerEdit.addEventListener('click', () => {
        if (taskInputEl.readOnly) {
            taskInputEl.removeAttribute('readonly');
            taskInputEl.focus();
            taskEditEl.innerHTML = '<i class="fas fa-save"></i>'
        } else {
            taskInputEl.setAttribute('readonly', 'readonly');
            taskEditEl.innerHTML = '<i class="fas fa-edit"></i>';
        }
    })


    //Logica para eliminar la tarea
    containerDelete.addEventListener('click', () => {
        listEl.removeChild(taskEl)
    })
  });
});
