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
    console.log('deliverydate da API'  + deliverydate)
    const deliveryDate = new Date(deliverydate)
    console.log('deliveryDate do service'  + deliveryDate)


    const deliverydateFormated = format(deliveryDate, "yyyy/MM/dd HH:mm")
    console.log('deliveryDate do service formated'  + deliverydateFormated)

    return (
       <TaskItemContainer>
           <h1>{title} de {subject}</h1>
           <h3>{deliverydateFormated}</h3>
       </TaskItemContainer>
    )
}

export default TaskItem

