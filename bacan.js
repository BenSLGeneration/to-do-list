window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    // Crear la card de la tarea
    const task_el = document.createElement('div');
    task_el.classList.add('card', 'mb-3', 'bg-secondary');

    const task_body_el = document.createElement('div');
    task_body_el.classList.add('card-body', 'd-flex', 'align-items-center');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('flex-grow-1', 'me-3');

    const task_input_el = document.createElement('input');
    task_input_el.type = 'text';
    task_input_el.classList.add('form-control-plaintext', 'text-light', 'fs-5');
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);
    task_body_el.appendChild(task_content_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions', 'd-flex');

    // Botón de editar
    const edit_container = document.createElement('div');
    edit_container.classList.add('bg-primary', 'p-2', 'rounded', 'me-2', 'd-flex', 'justify-content-center', 'align-items-center');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('btn', 'btn-link', 'text-decoration-none', 'text-light', 'btn-sm');
    task_edit_el.innerHTML = '<i class="fas fa-edit"></i>';

    edit_container.appendChild(task_edit_el);

    // Botón de eliminar
    const delete_container = document.createElement('div');
    delete_container.classList.add('bg-danger', 'p-2', 'rounded', 'd-flex', 'justify-content-center', 'align-items-center');

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('btn', 'btn-link', 'text-decoration-none', 'text-light', 'btn-sm');
    task_delete_el.innerHTML = '<i class="fas fa-trash"></i>';

    delete_container.appendChild(task_delete_el);

    task_actions_el.appendChild(edit_container);
    task_actions_el.appendChild(delete_container);
    task_body_el.appendChild(task_actions_el);
    task_el.appendChild(task_body_el);
    list_el.appendChild(task_el);

    input.value = '';

    // Evento para editar
    task_edit_el.addEventListener('click', () => {
      if (task_input_el.readOnly) {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerHTML = '<i class="fas fa-save"></i>';
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerHTML = '<i class="fas fa-edit"></i>';
      }
    });

    // Evento para eliminar
    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });
  });
});