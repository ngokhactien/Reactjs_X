import React , {Component}  from  'react' ;

class Coumter extends Component{
    constructor(props){
        console.log('counter constructor');
        super(props);
        this.state ={
            count : 0
        };
    }
    increate(){
        this.setState (                // nhấn nút giảm xét lại state  
            {
                count : this.state.count + 1 
            }
        );
    }
    decreate(){                      // nhấn nút giảm xét lại state   
        this.setState (
            {
                count : this.state.count - 1 
            }
        );
    }
    render(){
        console.log('count render ');
        return(
            <div className="counter">
                <button onClick = { () => this.decreate()}>-</button>
                <span> { this.state.count}</span>
                <button onClick = { () => this.increate()}>+</button>
            </div>
        );
    }
    componentDidMount(){
        console.log('count did mount');
    }
    componentDidUpdate(){
         console.log('count did  update');
    }
    componentWillMount(){
        console.log('count wil mount');
    }
    shouldComponentUpdate( nextProps , nextState){
        if(this.props.count === nextState.count){
            return false ;
        }
        return true ;
    }

}
export default Coumter;