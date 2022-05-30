import { Form, Button } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
const MinusIcon = MinusCircleOutlined
const AddButton = (props) =>  
<Form.Item>
    <Button type="dashed" onClick={props.onClick} block icon={<PlusOutlined />}>
        Додати запис
    </Button>
</Form.Item>
export { MinusIcon, AddButton };
export default AddButton;