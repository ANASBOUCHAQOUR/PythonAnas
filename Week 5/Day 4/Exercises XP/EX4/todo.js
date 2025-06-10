export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(taskDescription) {
      const task = {
        description: taskDescription,
        completed: false
      };
      this.tasks.push(task);
    }
  
    markTaskComplete(index) {
      if (this.tasks[index]) {
        this.tasks[index].completed = true;
      } else {
        console.log(`No task found at index ${index}`);
      }
    }
  
    listTasks() {
      this.tasks.forEach((task, index) => {
        const status = task.completed ? '✅ Done' : '❌ Not done';
        console.log(`${index}. ${task.description} - ${status}`);
      });
    }
  } 