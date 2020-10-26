import React, { useState } from 'react';
import api from '../../services/api';

import { TaskItemContainer } from './styles'

export interface TaskItemProps {
    id?: string
    title: string
    subject: string
    date: string
    time: string
    deliverydate?:string
    done: boolean
}
const TaskItem: React.FC<TaskItemProps> = ( {id, title, subject, time, date, done} ) => {
    const [checked, setChecked] = useState(done)
    const [expand, setExpand] = useState(false)

    function handleDoneTask(value){
        api.patch(`/tasks/${id}`)
        .then(() => setChecked(value))
        .catch(error => console.error(error))
    }
    return (
       <TaskItemContainer className={expand ? 'expand' : ''}>
           <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={(e)=> handleDoneTask(!checked)} name="task"/>
            <h1 className={checked ? 'checked' : ''}>{title} de {subject}</h1>
            <img 
                src={expand ? '/icons/selectUp.svg' : '/icons/selectDown.svg'} 
                alt="icon"
                onClick={()=> setExpand(!expand)}
            />
           </div>
            {expand && 
                <div className="delivery-date">
                    <p className="date">
                        <img src="/icons/date.svg" alt="date icon"/>
                        <span>{date}</span> 
                    </p>
                    <p className="time">
                        <img src="/icons/time.svg" alt="time icon"/>
                        <span>{time}</span> 
                    </p>
                </div>
            }
       </TaskItemContainer>
    )
}

export default TaskItem

