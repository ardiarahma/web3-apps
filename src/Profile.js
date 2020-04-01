import React, {Component} from 'react';
import { Card } from 'antd';
import Cards from './Cards';
import Photos from './Photos';

class Content extends Component {
    render() {
        return (
            <div>
                <Photos/>                  
            </div>
        );
    }
}

export default Content;