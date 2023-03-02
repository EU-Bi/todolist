import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openPopUp, toggleTodo } from './redux'

const Table = () => {

    const handleOnChange = (id) => {
        dispatch(toggleTodo(id))
      };

    const dispatch = useDispatch()
    const onOpen =(e, todo)=>{
        e.preventDefault();
        dispatch(openPopUp(todo))
    }
    const list = useSelector((state)=>state.todos.todoList)
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            
            {list?
                list.map(row=>(
                    <tr  key={row.id}>
                        <th>{row.id}</th>
                        <th onClick={(e)=>onOpen(e, row)}>{row.title}</th>
                        <th>{row.description}</th>
                        <th><input type="checkbox" checked={row.status} onChange={()=>handleOnChange(row.id)}/></th>
                    </tr>
                ))
                :
                    (<tr>
                        <td>N/A</td>
                    </tr>)
            }
        </tbody>
    </table>
  )
}

export default Table