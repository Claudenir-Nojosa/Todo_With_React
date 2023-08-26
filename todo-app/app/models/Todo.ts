class Todo {
  title: string;
  priority: string;
  status: string;
  description: string;
  id: string;

  constructor(
    title: string,
    priority: string,
    status: string,
    description: string,
    id: string
  ) {
    (this.title = title),
      (this.priority = priority),
      (this.status = status),
      (this.description = description),
      (this.id = id);
  }
}

export default Todo;
