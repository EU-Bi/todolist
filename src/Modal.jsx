import React from 'react'
import { useDispatch } from 'react-redux'
import { closePopUp } from './redux'

const Modal = ({todo}) => {
    const dispatch = useDispatch()

    const onClose=(e)=>{
        e.preventDefault()
        dispatch(closePopUp())
    }
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1>{todo.title}</h1>
      <span>{todo.description}</span>
      <input type='checkbox' defaultChecked={todo.status}/>
      <button 
        onClick={onClose}
      >Close</button>
     </div>
    </div>
  )
}

export default Modal