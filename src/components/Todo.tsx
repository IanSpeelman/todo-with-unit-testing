import React, { useState } from "react"
import Form from "./Form"
import TodoList from "./TodoList"
import { Todos } from './types'
export default function Todo() {

  const [todos, setTodos] = useState<Todos>([])

  return (<>
    <Form todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
  </>
  )
}
