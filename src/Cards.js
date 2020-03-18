import React from 'react';
import './Page.css';
import { Card, Col, Row} from 'antd';

const { Meta } = Card;
const cardData = [
    {
        name : "Nur Ardia Rahmaningrum",
        job : "Software Engineer",
        image : require('./assets/pipel4.jpg')
    },
    {
        name : "Babe",
        job : "Project Manager",
        image : require('./assets/pipel2.jpg')
    },
    {
        name : "Savareina Mazaya",
        job : "UI/UX Designer",
        image : require('./assets/pipel1.jpg')
    },
    {
        name : "Vicky H",
        job : "Lecturer",
        image : require('./assets/pipel3.jpg')
    }
]

class Cards extends React.Component{
    render(){
        return(
            <div className="site-card-wrapper">
                <Row gutter={10}>
                    {cardData.map(data =>
                    <Col span={6}>
                        <Card hoverable
                            style={{ width: 240}}
                            cover={<img src={data.image} />}>
                            <Meta title={data.name} description={data.job} />
                        </Card>
                    </Col>
                        )}
                </Row>
            </div>


        )
    }
}

export default Cards;