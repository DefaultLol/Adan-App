import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state={
    prayer:[],
    year:null,
    month:null
  }
  onSubmit=(e)=>{
    e.preventDefault();
    let today=new Date();
    const year=today.getFullYear();
    const city=e.target.city.value;
    const country=e.target.country.value;
    const month=e.target.month.value;
    axios.get(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=${month}&year=${year}`).then(res=>{
      console.log(res.data.data);
      this.setState({
        prayer:res.data.data,
        year:year,
        month:res.data.data[0].date.gregorian.month.en
      });
    });
  }
  render(){
    return (
      <div className="container" id="content">
        <Form getInfo={this.onSubmit}/>
        {this.state.month && <h4 className="text-center">{this.state.month+" "+this.state.year}</h4>}
        <table className="table">
          <tr className="table-success">
            <th>Week Day</th>
            <th>Day</th>
            <th>Fajr</th>
            <th>Dhuhr</th>
            <th>Asr</th>
            <th>Maghrib</th>
            <th>Isha</th>
          </tr>
          {this.state.prayer.map(info=>(
              <tr>
                <td>{info.date.gregorian.weekday.en}</td>
                <td>{info.date.gregorian.day}</td>
                <td>{info.timings.Fajr}</td>
                <td>{info.timings.Dhuhr}</td>
                <td>{info.timings.Asr}</td>
                <td>{info.timings.Maghrib}</td>
                <td>{info.timings.Isha}</td>
              </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
