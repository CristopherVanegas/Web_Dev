import React from 'react'

export default function TodoComponent({todo}) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete}></input>
        {todo.name}
      </label>
    </div>
  )
}
