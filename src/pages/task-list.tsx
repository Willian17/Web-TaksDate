import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import LoadingFeedShare from '../components/LoadingTasks';
import TaskItem, {TaskItemProps} from '../components/TaskItem';

import api from '../services/api';

import { 
    TaskContainer,
    TasksList
} from '../styles/pages/taskList'
import formatDate from '../utils/formatDate';


const ListTask: React.FC = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        api.get('/tasks').then((response)=>{
            setTasks(response.data)
            setIsLoading(false)
        }).catch(error=> {
            console.log(error)
        })
    }, [])
    return(
        <TaskContainer>
            <Header title="Estas são as tarefas atuais"/>
            <TasksList>
                {isLoading && 
                <>
                    <LoadingFeedShare />
                    <LoadingFeedShare />
                    <LoadingFeedShare />
                    <LoadingFeedShare />
                </>
                }

                {!isLoading && tasks.map(( {deliverydate, title, id, subject, done }: TaskItemProps ) => {
                     const { date, time } = formatDate(deliverydate)
                    return(
                        <TaskItem 
                            date={date} 
                            time={time}
                            title={title}
                            subject={subject}
                            done={done}
                            id={id}
                            key={id}
                        />
                    )
                    })}
                
            </TasksList>

        </TaskContainer>
    )
}

export default ListTask