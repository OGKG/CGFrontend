import { Button, Form, Divider } from 'antd';
import GrahamTable from './inputs/grahamTable';
import Point from "./inputs/point"
import PointList from "./inputs/pointList"
import { useParams } from 'react-router-dom';

// const {TextArea} = Input

const Graham = () => {
    const[form] = Form.useForm();
    const params = useParams();

    const processRow = (tablerow) => {
      const row=tablerow.row
      return {cells:[
          {content: row.points},
          {content: row.lessPi? "less": "more"}, 
          {content: row.center},
          {content: row.toAdd? "yes": "no"},
        ]}
    }
    
    const mapData = (data) => {
      return [
        data.centroid,
        {
          points: data.points
        },
        data.start,
        {
          rows: data.grahamlist.map(processRow)
        }
      ]
    } 

    const onSubmit = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mapData(values))
        };
        fetch(`http://127.0.0.1:8000/graham-task/${params.grahamTaskId}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        console.log(JSON.stringify(mapData(values)))
        // console.log(values)
        
    }

    return (
    <Form
    form={form}
    layout="vertical"
    onFinish={onSubmit}
    
    >
      <Point label="Центроїд" name={["centroid"]}/>
      <Divider/>
      <PointList/>
      <Divider/>
      <Point label="Початкова точка" name={["start"]}/>
      <Divider/>
      <GrahamTable/>
      <Divider/>
      <Form.Item label="Відправити відповідь">
        <Button htmlType="submit" type="primary">Send</Button>
      </Form.Item>
    </Form>
    )
};

export default Graham;