// Represents an individual task
export class Task {
  constructor(name, isComplete=false) {
    this.name = name
    this.isComplete = isComplete
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete
  }
}

// Represents a list of tasks
export class TodoList {
  constructor() {
    this.tasks = []
  }

  addTask(taskToAdd) {
    if (taskToAdd.name) {
      this.tasks.push(taskToAdd)
    }
  }

  deleteTask(taskToRemove) {
    const indexToRemove = this.tasks.indexOf(taskToRemove);
    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }
  }
  
  countTotalTasks() {
    return this.tasks.length
  }

  countIncompleteTasks() {
    return this.tasks.length
  }

  countCompleteTasks() {
    return this.tasks
    .filter((task) => task.isComplete)
    .length
  }

  checkIsEntireListComplete() {
    const listHasTasks = this.tasks.length > 0
    const allTasksAreCompleted = this.countTotalTasks() === this.countCompleteTasks()
    return listHasTasks && allTasksAreCompleted
  }
  
 }