import React from 'react'
import styles from "./todoitem.module.css"
import { Todo, SetTodos } from "./types"

type TodoItemProps = {
  item: Todo;
  todos: Todo[];
  setTodos: SetTodos;
}

const TodoItem = ({ item, todos, setTodos }: TodoItemProps) => {

  const handleDelete = (item: Todo) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== item.id))
  }

  const toggleComplete = (item: Todo) => {
    console.log(item)
    setTodos(todos.map((todo: Todo) => todo.id === item.id ? { ...todo, complete: !todo.complete } : { ...todo }))
    console.log(todos)
  }

  return (
    <div className={styles.container}>
      <li className={item.complete ? styles.namecomplete : styles.name} onClick={() => toggleComplete(item)}>{item.task}</li>
      <button className={styles.delete} onClick={() => handleDelete(item)}>x</button>
    </div>
  )

}

export default TodoItem
