import { Button, Form, Space, Input } from 'antd';
import Point from "./inputs/point"
import { MinusIcon, AddButton } from './inputs/buttons';

const Graham = () => {
    const[form] = Form.useForm();

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
    <Form
    form={form}
    onFinish={onSubmit}
    >
    <Form.List name="points">
    {(fields, { add, remove }) => (
    <>
        {fields.map(({ key, name }) => (
        <Space key={key} style={{ display: 'flex', marginBottom: 8 }}>
            <Point name={name}/>
            <MinusIcon onClick={() => remove(name)} />
        </Space>
        ))}
        <AddButton onClick={() => add()}/>
    </>
    )}
    </Form.List>
      <Form.Item noStyle label="Відправити відповідь">
        <Button htmlType="submit" type="primary">Send</Button>
      </Form.Item>
    </Form>
    )
};

export default Graham;