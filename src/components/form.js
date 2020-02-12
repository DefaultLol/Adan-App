import React from 'react';

class Form extends React.Component{
  render(){
    return(
      <div>
        <h3 className="text-center">Prayer Time Table</h3>
        <form onSubmit={this.props.getInfo}>
          <input type="text" name="city" placeholder="City" className="form-control" /><br />
          <input type="text" name="country" placeholder="Country" className="form-control" /><br />
          <input type="text" name="month" placeholder="Month" className="form-control" /><br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
