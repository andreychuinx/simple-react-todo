import React from "react";

function TodoItem({ id, item, onCheck }) {
  return (
    <>
      <li
        // onClick={() => { onCheck(id) }}
      >
        <span style={{float: 'left'}}>
        {item}
        </span>
        <span
        style={{float: 'right', color: 'red'}}
        onClick={() => { onCheck(id) }}

        >x</span>
      </li>
    </>
  )
}
export default TodoItem;