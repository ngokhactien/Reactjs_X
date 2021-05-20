import React , {Component}  from 'react'; 
export default class Countnumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }
    componentDidMount(){
        this.timerId = setInterval (()=>{
            this.setState({
                count : this.state.count + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        // cách1
        // return <div>
        //     { this.props.render(this.state.count) }
        // </div>
        // cách2
        return <div>
        { this.props.children(this.state) }
        </div>
    }
}