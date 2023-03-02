import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDO} from './redux'


const Form = () => {
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const dispatch = useDispatch()

    
    const handleAddTodo = ()=>{
        dispatch(addToDO(title,description,false))
        setTitle("")
        setDescription("")
    }

  return (
    <div>
        <form >
            <label htmlFor="title">Title: </label>
            <input 
                type="text"
                id='title' 
                placeholder='Enter title' 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <label htmlFor="description">Description: </label>
            <input 
                type="text" 
                id='description' 
                placeholder='Enter description' 
                value={description}
                onChange={e=>setDescription(e.target.value)}
            />
            <button
               onClick={(e)=>{
                e.preventDefault()
                handleAddTodo()
                
               }}
            >Create</button>
        </form>
    </div>
  )
}

export default Form