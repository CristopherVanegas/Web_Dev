import React from 'react'
import Todo from './TodoComponent'

export default function TodoList({todoList}) {
  return (
      todoList.map(todo => {
        return <Todo key={todo.id} todo={todo}/>
      })
  )
}
