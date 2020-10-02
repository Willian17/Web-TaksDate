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
    const deliveryDate = new Date(deliverydate)

    const deliverydateFormated = format(deliveryDate, "yyyy/MM/dd HH:MM")

    return (
       <TaskItemContainer>
           <h1>{title} de {subject}</h1>
           <h3>{deliverydateFormated}</h3>
       </TaskItemContainer>
    )
}

export default TaskItem

