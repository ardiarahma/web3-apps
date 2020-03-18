import React from 'react';
import './Photos.css';
import { Carousel } from 'antd';

const photo = [
    {
        image : require('./assets/2.jpg')
    },
    {
        image : require('./assets/3.jpg')
    },
    {
        image : require('./assets/4.jpg')
    },
    {
        image : require('./assets/ice-snowflakes.jpg')
    }
    // {
    //     image : require('./assets/winter-lake.jpg')
    // },
    // {
    //     image : require('./assets/winter-forest.jpg')
    // }
]

class Photos extends React.Component{
    render(){
        return(
            <Carousel autoplay>
                {photo.map(data =>
                    <div>
                        <img src={data.image} style={{maxWidth:'100%'}}/>
                    </div>
                    )}
            </Carousel>
        )
    }
}

export default Photos;
