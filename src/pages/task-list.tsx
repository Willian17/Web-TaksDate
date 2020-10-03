import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import TaskItem, {TaskItemProps} from '../components/TaskItem';

import api from '../services/api';

import { 
    TaskContainer,
    TasksList
} from '../styles/pages/taskList'


const ListTask: React.FC = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        console.log("process.env.API_URL >>" + process.env.API_URL)
        api.get('tasks').then((response)=>{
            setTasks(response.data)
        }).catch(error=> {
            console.error(error)
        })
    }, [])
    return(
        <TaskContainer>
            <Header title="Estas são as tarefas atuais"/>
            <TasksList>
                {tasks.map(( {deliverydate, title, id, subject }: TaskItemProps ) => (
                    <TaskItem 
                        deliverydate={deliverydate} 
                        title={title}
                        subject={subject}
                        key={id}
                    />
                ))}
            </TasksList>

        </TaskContainer>
    )
}

export default ListTask