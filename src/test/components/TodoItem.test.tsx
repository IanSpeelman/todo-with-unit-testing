import React from "react";
import { it, expect, describe, afterEach, vi } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'

import TodoItem from "../../components/TodoItem";
const todos = [{ id: 0, task: "mop floor", complete: false }, { id: 1, task: "dont mop ceiling.. this time", complete: true }]

afterEach(() => {
  cleanup()
})



describe("TodoItem", () => {
  it("should render a todo item in the dom", () => {

    const setTodos = vi.fn()

    render(<TodoItem item={todos[1]} todos={todos} setTodos={setTodos} />)

    const li = screen.getByRole('listitem')
    expect(li).toBeInTheDocument()
    expect(screen.getByText(todos[1].task)).toBeInTheDocument()

  })

  it("should delete itself when the delete button is clicked", () => {

    const setTodos = vi.fn()

    render(<TodoItem item={todos[1]} todos={todos} setTodos={setTodos} />)

    const li = screen.getByRole('listitem')
    const button = screen.getByRole('button')

    expect(li).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(screen.getByText(todos[1].task)).toBeInTheDocument()


    fireEvent.click(button)

    expect(todos).not.toContain({ id: 1, task: "dont mop ceiling.. this time", complete: true })


  })
})
