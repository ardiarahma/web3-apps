import React from 'react';
import './Page.css';
import Counters from './Counters';
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
    constructor(probs){
        super(probs);
        
    }
    state = {
        vote: 0
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            vote: newValue
        })
    }
    

    render(){
        const likes_img = require('./assets/like.png');
        const {vote} = this.props;
        return(
            <div className="site-card-wrapper">
                <Row gutter={10}>
                    {cardData.map(data =>
                    <Col span={6}>
                        <Counters onCounterChange ={(value)=>this.handleCounterChange(value)}/>
                        <Card
                            style={{ width: 240}}
                            cover={<img src={data.image} />}>
                            <div className="likes">
                                <Row>
                                    <Col span={6}>
                                        <img alt="icon heart" src={likes_img}></img>
                                    </Col>
                                    <Col span={15}>
                                        <p style={{paddingTop:"4px"}} >{this.state.vote}  vote</p>
                                    </Col>
                                </Row>
                            </div>
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