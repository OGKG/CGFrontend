import { Space } from 'antd';
import { Link } from 'react-router-dom';

const Task = (props) => 
    <Link key={props.key} to={`${props.task.id}`}>
        Задача {props.task.name}
    </Link>
export default Task;