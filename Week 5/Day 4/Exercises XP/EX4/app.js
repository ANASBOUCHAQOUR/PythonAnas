import { TodoList } from './todo.js';

console.log("--- Checking for output ---");

const myTodos = new TodoList();

myTodos.addTask('Buy groceries');
myTodos.addTask('Do laundry');
myTodos.addTask('Study JavaScript');

myTodos.markTaskComplete(0); // Mark the first task as done
myTodos.markTaskComplete(2); // Mark the third task as done
console.log('📋 Your Todo List:');
myTodos.listTasks();