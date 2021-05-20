import React , {Component} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Counter from './components/Counter';

import Countnumber from './components/Countnumber';


// import { Button } from 'reactstrap';

class  App extends Component {

  // ref
  constructor(props){
    super(props);
    this.inputElement = React.createRef();     // input 
    //setTimeout(() => this.inputElement.current.focus(), 2000);
    // this.inputElement.current.focus();

    //count
    this.state ={
      showcount : true 
    }
  }
  //ref
  componentDidMount(){    // hàm này sẽ chạy sau ko các element , dom đã tạo rồi đã được thực hiện xong rồi hàm này chạy
   
    // debugger;    // cho nó dừng xem code
    
     //setTimeout(() => this.inputElement.current.focus(), 2000);
    this.inputElement.current.focus();
  }

  //count tăng giảm 
  removeCount(){
    this.setState (
      {
        showcount : false 
      }
    );
  }
  // test tăng giảm 
  componentDidUpdate(){
    console.log('App update');
  }

  render() {

    // test tăng giảm
    console.log('app render');
    
    return (
      <div className="App">
         {/* cách1  */}
        {/* <Accordion  heading="tien nk"  content=" demo children lesson "/> */}
        
        <Accordion   heading="tien nk" >
          demo children lesson
        </Accordion>
        
        {/* ref */}
        <div>
        <input className="text1" type="text" ref={this.inputElement}/>
        </div>
        
        
        {/* tăng giảm  */}
        <button className = "button"  onClick={() => this.removeCount()}> remove count</button>
        { this.state.showcount && <Counter /> }


        {/* bootstrap */}
      {/* <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button> */}


      {/* coutnnumber */}
      {/* cách1 */}
        {/* <Countnumber render={value => <div>{value}</div>}/> */}
      {/* cach2 */}
        <Countnumber >
          {
            state => <h1>{state.count}</h1>
          }
        </Countnumber>
      </div>
    );
  }
  
}

export default App;
