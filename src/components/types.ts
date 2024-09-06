type Todo = {
  id: number;
  task: string;
  complete: boolean;
}
type Todos = Todo[]
type SetTodos = (Todos: Todos) => void


export { Todo, SetTodos, Todos }
