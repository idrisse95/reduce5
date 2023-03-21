import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { addList, deleteTask } from '../redux';

export const List = () => {

    const motList = useSelector(state => state.todoList.liste)
    const motAjout = useSelector(state => state.todoList.valu)
    
  
    const dispatch = useDispatch()

    const ajout = () => {
        const valu = {valu:document.getElementById('oe').value}
         dispatch(addList(valu))
         dispatch(deleteTask(valu))
         console.log(valu);
         console.log(motAjout)
         
    }
    console.log(motAjout)


  return (  
    <div>

        <input type="text" id='oe' placeholder='ajouter?' />
        <p>

        {motList}

        </p>
        <button onClick={ajout}>ajout</button>
    </div>
  )
}
