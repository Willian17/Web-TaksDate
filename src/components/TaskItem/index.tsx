import React from 'react';
import {format} from 'date-fns'

import { TaskItemContainer } from './styles'

export interface TaskItemProps {
    id?: string
    title: string
    subject: string
    deliverydate: string
}
const TaskItem: React.FC<TaskItemProps> = ( {title, subject, deliverydate} ) => {


    return (
       <TaskItemContainer>
           <h1>{title} de {subject}</h1>
           <h3>{deliverydate}</h3>
       </TaskItemContainer>
    )
}

export default TaskItem

