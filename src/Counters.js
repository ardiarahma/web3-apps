import React from 'react';
import { Card, Button} from 'antd';
import { LikeFilled, DislikeFilled} from '@ant-design/icons';
import Cards from './Cards';
const { Meta } = Card;

class Counters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vote : 0
        }
    }
    

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }

    handleLike = () => {
        this.setState({
          vote: this.state.vote + 1
        }, () => {
            this.handleCounterChange(this.state.vote);
        })
    }
    
    handleDislike = () => {
        if(this.state.vote > 0) {
          this.setState({
            vote: this.state.vote - 1
          }, () => {
            this.handleCounterChange(this.state.vote);
        })
        }
    }

    render(){
        const {name, job, image} = this.props;
        return(
            // extra={
            //     <Cards vote={this.state.vote}></Card>
            //     }>
            <Card className="counterLikes">
                <div className="counter">                  
                    <Button type="primary" danger onClick={this.handleDislike} icon={<DislikeFilled />} />
                    <Button style={{ marginLeft: "5px"}} type="primary" onClick={this.handleLike} icon={<LikeFilled />} /> 
                <div style={{ float:"right"}}>{this.state.vote} votes</div>             
                </div> 
            </Card>
        )
    }
}

export default Counters;
