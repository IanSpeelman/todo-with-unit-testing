import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Form from "../../components/Form";
import { Todos } from "../../components/types";

// Cleanup DOM after each test run
afterEach(() => {
  cleanup()
})



describe('form', () => {

  // Set mocking variables
  const todos: Todos = [{ id: 1, task: "mop the floor", complete: false }, {
    id: 2, task: "dont mop the ceiling... again", complete: true
  }]

  // Test Normal rendering of the component
  it("should render a textbox and a button", () => {

    const setMockState = vi.fn()

    render(<Form todos={todos} setTodos={setMockState} />)

    const input = screen.getByPlaceholderText(/new task/i)
    const button = screen.getByRole('button')
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  // Test the action of the function and test if the mock function is called with the correct arguments
  it("Should set the state when button is clicked", () => {

    const setMockState = vi.fn()

    render(<Form todos={todos} setTodos={setMockState} />)

    const input = screen.getByPlaceholderText(/new task/i)
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "new task!" } })
    fireEvent.click(button)

    expect(setMockState).toHaveBeenCalledOnce()
    expect(setMockState).toHaveBeenCalledWith([...todos, { id: 2, task: "new task!", complete: false }])
  })

  it("should reject setting the state when no input is given", () => {

    const setMockState = vi.fn()

    render(<Form todos={todos} setTodos={setMockState} />)

    const input = screen.getByPlaceholderText(/new task/i)
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "" } })
    fireEvent.click(button)

    expect(setMockState).toHaveBeenCalledTimes(0)
  })

})
