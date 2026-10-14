// TodoController is the GRASP Controller: it receives UI events and delegates.
// It does two things only: call the service, then tell the renderer.
export class TodoController {
  constructor(todoService, todoRenderer) {   // dependencies injected (DIP)
    this.todoService = todoService;
    this.todoRenderer = todoRenderer;
  }

  start() {
    this.todoRenderer.render(this.todoService);
  }

  addTask(description, type) {
    const newId = this.todoService.addTask(description, type);  // 1. delegate to the expert
    if (newId) {
      this.todoRenderer.render(this.todoService, newId);         // 2. tell the renderer
    }
    return newId;
  }

  toggleTask(id) {
    this.todoService.toggleComplete(id);
    this.todoRenderer.render(this.todoService);
  }

  deleteTask(id) {
    this.todoService.deleteTask(id);
    this.todoRenderer.render(this.todoService);
  }
}
