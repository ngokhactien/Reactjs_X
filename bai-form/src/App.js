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
                      <label >Mô tả :</label>
                      
                      <textarea   
                          className="form-control" 
                          rows="3"
                          name="textDesc"
                          onChange = { this.onheaderchange}
                          value ={this.state.textDesc} 
                      ></textarea>
                      </div>

                      <label>Giới tính :</label>
                      <select 
                              className="form-control" 
                              name= "sltGender" 
                              value ={this.state.sltGender} 
                              onChange={this.onheaderchange} 
                      >
                        <option value={0} >Nữ</option>
                        <option value={1}  >Nam</option>
                      </select>
                      <br/>
                      <label>Ngôn ngữ</label>
                      <div className="radio">
                        <label>
                            <input 
                                type="radio" 
                                name="rdlang" 
                                value='en'
                                onChange={this.onheaderchange} 
                                checked = {this.state.rdlang === 'en'} 
                            />
                            Tiếng Anh
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
                            Tiếng việt
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
                          Trạng thái
                        </label>
                      </div>
                      
                      
                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset" className="btn btn-default">Xóa Trắng</button>
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
