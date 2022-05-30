import Task from './singleTask';
import { useState, useEffect } from "react";
import { Space, List } from 'antd';


const TaskList = (props) => {
    const [data, setData] = useState();

    useEffect(() =>
    {
        const requestOptions = {
            method: 'get',
        };

        fetch("http://127.0.0.1:8000/tasks/", requestOptions)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    
    
    return (
    <List>
        <List.Item>
            {data ? data.map(task => <Task key={task.id} task={task}/>) : <></>}
        </List.Item>
    </List>
    );
}


export default TaskList;