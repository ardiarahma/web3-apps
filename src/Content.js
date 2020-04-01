import React, {Component} from 'react';
import { Card } from 'antd';
import Cards from './Cards';
import Photos from './Photos';

class Content extends Component {
    render() {
        return (
            <div>
                <Photos/>                  
                <Card style={{marginTop: '24px'}}>
                    <p
                    style={{
                        textAlign: "center",
                        fontSize: "30px"
                    }}
                    >Please Vote Below for The Best Employee of the Year</p>
                    <p
                    style={{
                        textAlign: "center",
                        color: 'rgb(130, 133, 138)'
                        
                    }}
                    >Voting is the expression of our commitment to ourselves and the future</p>
                </Card>
                <Cards/>
            </div>
        );
    }
}

export default Content;