import Point from "./point";
import { Checkbox, Form, Space } from 'antd';
import { AddButton, MinusIcon } from "./buttons";

const GrahamRow = (props) => 
    <Space direction="vertical" align="baseline">
        <Space direction="vertical" align="baseline">
            <Point name={[...props.name, "points", 0]}/>
            <Point name={[...props.name, "points", 1]}/>
            <Point name={[...props.name, "points", 2]}/>
        </Space>
        <Space align="baseline">
            Центр
            <Point name={[...props.name, "center"]}/>
            Менше Pi?
            <Form.Item noStyle valuePropName="checked" name={[...props.name, "lessPi"]}>
                <Checkbox/>
            </Form.Item>
            Додати?
            <Form.Item noStyle valuePropName="checked" name={[...props.name, "toAdd"]}>
                <Checkbox/>
            </Form.Item>
            {props.minus}
        </Space>
    </Space>

const GrahamTable = () => 
<>
    Таблиця Грехема
    <Form.List name="grahamlist">
    {(fields, { add, remove }) => (
    <>
        {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item noStyle {...restField} name={[name, 'row']}>
                    <GrahamRow minus={<MinusIcon onClick={() => remove(name)} />} name={[name, 'row']}/>
                </Form.Item>
            </Space>            
        ))}
        <AddButton onClick={() => add()}/>
    </>
    )}
    </Form.List>
</>

export default GrahamTable;