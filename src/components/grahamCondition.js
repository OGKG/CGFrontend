import { Typography } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const { Text } = Typography;

const GrahamCondition = () =>
{
    const params = useParams();
    const [conditionString, setConditionString] = useState("");
    useEffect(() =>
    {
        const requestOptions = {
            method: 'get',
        };

        fetch(`http://127.0.0.1:8000/graham-task/${params.grahamTaskId}`, requestOptions)
            .then(response => response.json())
            .then(data => setConditionString(
                data.point_list
                .map(point => `(${point.x}, ${point.y})`).join(", ")
            ));
    }, []);
    return (
    <Text>
        Побудуйте оболонку методом Грахама. Точки: {conditionString ? conditionString : ""}
    </Text>
    )
}

export default GrahamCondition;