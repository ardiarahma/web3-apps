import React, {Component} from 'react';
import Photos from './Photos';
import { Row, Col } from 'antd';
import './Cards.css';

class Content extends Component {
    render() {
        const img_profile = require('./assets/ava2.jpg');
        return (
            <div>
                <Row>
                    <Col span={16}>
                        <p style={{fontSize:"50pt", textAlign: "center", paddingTop:"100px", margin: 0, color:'#001529'}}>Hello!</p>
                        <p className="description">
                        My Name is Nur Ardia Rahmaningrum
                        <br/>
                        I'm Software Engineering student of Gadjah Mada University.
                        <br/>
                        I love art, music, and technology. 
                        <br/>
                        I am a good listener, honest, responsible, 
                        <br/>
                        and can work quickly in teams and also individual.</p>
                    </Col>
                    <Col span={6}>
                        <img alt="" src={img_profile} 
                        style={{
                            maxWidth:"250px"
                        }}></img>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default Content;