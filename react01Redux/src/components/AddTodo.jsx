import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addtodo} from '../features/todo/todoSlice'

function AddTodo() {
  const[input,setInput]=useState(null)
  const dispatch=useDispatch()


  

  const addTodoHandler=(e)=>{
    e.preventDefault();
    dispatch(addtodo(input))
    setInput('')

  }
  return (
  <form action="" className='flex justify-center py-14' onSubmit={addTodoHandler}>
    <input type="text" placeholder='enter todo' className='border border-black p-2 text-black rounded-xl w-96 h-16 ' onChange={(e)=>{
      setInput(e.target.value)
    }}  />
    <button className='mx-4 bg-green-500 w-24 rounded-xl' >Add Todo</button>

  </form>
  )
}

export default AddTodo