import React ,{ Component} from 'react';
// import "font-awesome-sprockets";
// import "font-awesom " ;
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     txtUserName :'abd' ,
  //     txtpassword :'' ,
  //     textDesc :'222',
  //     sltGender : 0 ,
  //     rdlang :'vi',
  //     chkStatus : false
  //   }
  //   this.onheaderchange = this.onheaderchange.bind(this);
  //   this.onHendlerSubmit = this.onHendlerSubmit.bind(this);
  // }
  // onheaderchange(event){
  //   var target = event.target;
  //   var name = target.name ;
  //   var value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [ name ] : value 
  //   });
    
  // }
  // onHendlerSubmit(event){
  //     event.preventDefault();
  //     console.log(this.state)
  // }
  render(){
    return (
      
      <div className="container mt-30" >
        
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">

                  {/* form  */}
                  
                  <form onSubmit= { this.onHendlerSubmit} >
                    <div className="form-group">
                      <label >UserName :</label>
                      <input 
                            type="text" 
                            className="form-control" 
                            name="txtUserName"
                            onChange = { this.onheaderchange}
                            value ={this.state.txtUserName} 
                      />
                    </div>

                    <div className="form-group">
                      <label >Password :</label>
                      <input 
                            type="password" 
                            className="form-control" 
                            name="txtpassword"
                            onChange = { this.onheaderchange}
                            value ={this.state.txtpassword} 
                      />
                    </div>


                    <div className="form-group">
                      <label >M?? t??? :</label>
                      
                      <textarea   
                          className="form-control" 
                          rows="3"
                          name="textDesc"
                          onChange = { this.onheaderchange}
                          value ={this.state.textDesc} 
                      ></textarea>
                      </div>

                      <label>Gi???i t??nh :</label>
                      <select 
                              className="form-control" 
                              name= "sltGender" 
                              value ={this.state.sltGender} 
                              onChange={this.onheaderchange} 
                      >
                        <option value={0} >N???</option>
                        <option value={1}  >Nam</option>
                      </select>
                      <br/>
                      <label>Ng??n ng???</label>
                      <div className="radio">
                        <label>
                            <input 
                                type="radio" 
                                name="rdlang" 
                                value='en'
                                onChange={this.onheaderchange} 
                                checked = {this.state.rdlang === 'en'} 
                            />
                            Ti???ng Anh
                        </label>
                        <br/>
                        <label>
                            <input 
                                type="radio" 
                                name="rdlang" 
                                value='vi' 
                                onChange={this.onheaderchange}
                                checked = {this.state.rdlang === 'vi'}  
                            />
                            Ti???ng vi???t
                        </label>
                      </div>

                      
                      <div className="checkbox">
                        <label>
                          <input 
                              type="checkbox" 
                              value={true}
                              name="chkStatus"
                              onChange={this.onheaderchange}
                              checked = {this.state.chkStatus === true}
                          />
                          Tr???ng th??i
                        </label>
                      </div>
                      
                      
                    <button type="submit" className="btn btn-primary">L??u l???i</button>&nbsp;
                    <button type="reset" className="btn btn-default">X??a Tr???ng</button>
                  </form>
        
                </div>
            </div>
            
          </div>
        </div>
        
      </div>
    // <>
    //   <i class="fa fa-battery-full" aria-hidden="true"></i>
    // </>
  );
  }
}

export default App;
