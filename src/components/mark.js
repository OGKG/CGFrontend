import { Statistic } from "antd";

const Mark = (props) => (
    <Statistic title="Оцінка" value={props.mark || props.mark === 0? props.mark:"—"}/>
) 

export default Mark;