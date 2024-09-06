import React, { useState } from 'react'
import styles from "./form.module.css"
import { Todos, SetTodos } from './types'

type FormProps = {
  todos: Todos;
  setTodos: SetTodos;
}

const Form = ({ todos, setTodos }: FormProps) => {


  const [todo, setTodo] = useState({ id: todos[todos.length - 1]?.id ?? 0 + 1, task: "", complete: false })


  function addTodo(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (todo.task.length > 0) {
      setTodos([...todos, todo])
      setTodo({ id: todos.length, task: "", complete: false })
      console.log(todos)
    }
  }

  return (
    <form className={styles.form} onSubmit={addTodo}>
      <input className={styles.input} type="text" value={todo.task} onChange={(e) => setTodo({ id: todos.length, task: e.target.value, complete: false })} placeholder="Enter new task" />
      <button className={styles.button} type="submit">Add!</button>
    </form>
  )
}



export default Form
