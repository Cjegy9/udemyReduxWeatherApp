import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherGraph from '../components/weather_graph';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(ele => {return ((ele.main.temp*(9/5))-459.67)});
    const pressures = cityData.list.map(ele => {return ele.main.pressure});
    const humidities = cityData.list.map(ele => {return ele.main.humidity});
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <WeatherGraph data={temps} color="blue"/>
        </td>
        <td>
          <WeatherGraph data={pressures} color="red"/>
        </td>
        <td>
          <WeatherGraph data={humidities} color="green"/>
        </td>
      </tr>
    );
  }


  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps( { weather } ) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);