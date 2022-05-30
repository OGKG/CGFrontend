import GrahamForm from "./grahamForm";
import GrahamCondition from "./grahamCondition";
import { Space, Row, Col } from 'antd';


const Graham = (props) => (
    <Col justify='center'>
        <Space direction='vertical' align='center'>
            <GrahamCondition {...props}/>
            <GrahamForm {...props}/>
        </Space>
    </Col>
)

export default Graham;