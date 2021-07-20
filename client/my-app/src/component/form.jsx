import React, { Component } from 'react';

 

class Form extends Component {
  state={
      name:''
  }


senddata=async (e)=>{
e.preventDefault();
try{
let res=await fetch('/add', {
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
    },
    body:JSON.stringify(this.state)
} );
console.log('result ',res)

}catch(e){
console.log("error",e);
}
}


  handlechange=(e)=>{
this.setState({name:e.target.value})
  }
  
  
    render() { 
        return (
            <>

<form   method='POST' >
<div>
  <label>
    Name:
    <input type="text" name="name"  onChange={this.handlechange} value={this.state.name}  />
  </label>
  </div>
  <button type="submit" value="Submit"  onClick={this.senddata} >Submit</button>

</form>


            </>
          );
    }
}
 
export default Form;