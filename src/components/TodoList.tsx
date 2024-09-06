import React from "react"
import styles from './todolist.module.css'
import TodoItem from "./TodoItem"
import { Todos, SetTodos, Todo } from "./types"

type TodoListProps = {
  todos: Todos;
  setTodos: SetTodos
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul className={styles.container}>
      {todos.map((item: Todo) => <TodoItem key={item.id} item={item} setTodos={setTodos} todos={todos} />)}
    </ul>
  )
}



export default TodoList
