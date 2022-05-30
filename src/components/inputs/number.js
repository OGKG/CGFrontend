import { InputNumber, Form } from 'antd';


const Number = (props) => (
  <Form.Item noStyle name={props.name}>
    <InputNumber placeholder={props.placeholder} stringMode/>
  </Form.Item>
  );

export default Number;