import Point from './point';
import { Form, Space } from 'antd';
import AddButton from './buttons';
import { MinusIcon } from './buttons';

const PointList = () =>
<>
    Список точок
    <Form.List name="points">
    {(fields, { add, remove }) => (
    <>
        {fields.map(({ key, name }) => (
        <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
            <Point name={[name]}/>
            <MinusIcon onClick={() => remove(name)} />
        </Space>
        ))}
        <AddButton onClick={() => add()}/>
    </>
    )}
    </Form.List>
</>

export default PointList;