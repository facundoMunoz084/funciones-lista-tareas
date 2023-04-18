const readline = require('readline-sync');

// Objeto con la lista de tareas
const taskList = {
  tasks: [],
  addTask: function(task) {
    this.tasks.push(task);
  },
  removeTask: function(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  },
  completeTask: function(taskIndex) {
    this.tasks[taskIndex].completed = true;
  },
  printTasks: function() {
    console.log('=== Lista de tareas ===');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
  }
};

function addTask() {
  console.log('=== Añadir tarea ===');
  const description = readline.question('Ingrese la descripción de la tarea: ');
  taskList.addTask({description, completed: false});
  taskList.printTasks();
}

function removeTask() {
  console.log('=== Eliminar tarea ===');
  taskList.printTasks();
  const taskIndex = readline.questionInt('Ingrese el número de la tarea a eliminar: ');
  taskList.removeTask(taskIndex - 1);
  taskList.printTasks();
}

function completeTask() {
  console.log('=== Completar tarea ===');
  taskList.printTasks();
  const taskIndex = readline.questionInt('Ingrese el número de la tarea a completar: ');
  taskList.completeTask(taskIndex - 1);
  taskList.printTasks();
}

function main() {
  while (true) {
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Salir');

    const option = readline.questionInt('Seleccione una opción: ');

    switch (option) {
      case 1:
        addTask();
        break;
      case 2:
        removeTask();
        break;
      case 3:
        completeTask();
        break;
      case 4:
        console.log('¡Hasta luego!');
        return;
      default:
        console.log('Opción inválida');
        break;
    }
  }
}

main();
