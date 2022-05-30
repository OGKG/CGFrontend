import Number from './number';
import { Form, Input, Space } from 'antd';

// const Point = (props) =>
//     <Input.Group compact>
//         <Number placeholder="x" name={props.name+"x"}/>
//         <Number placeholder="y" name={props.name+"y"}/>
//     </Input.Group>

const Point = (props) =>
<Space>  
    {props.label||""}
    <Number placeholder="x" name={[...[...props.name], "x"]}/>
    <Number placeholder="y" name={[...[...props.name], "y"]}/>
</Space> 

// export{ PointItem }
export default Point;
