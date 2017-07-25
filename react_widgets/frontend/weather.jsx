import React from 'react';

class Weather extends React.Component {
  constructor () {
    super();
    this.state = { location: "Fetching", weather: "data..." };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      const [lat, lon] = [location.coords.latitude, location.coords.longitude];
      const request = new XMLHttpRequest();
      request.open(
        'GET',
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=5515b6f98c81335511f884aa28e405e6`,
        true
      );

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const kelvin = JSON.parse(request.responseText).main.temp;
          const temp = JSON.parse(request.responseText).main.temp.toFixed(2);
          this.setState({ weather: temp + ' degrees' });
          this.setState({ location: JSON.parse(request.responseText).name });
        } else {
          this.setState({ weather: "Error retrieving weather!" });
        }
      };

      request.onerror = function() {
        this.setState({ weather: "Error retrieving weather!" });
      };

      request.send();
    });
  }

  render() {
    return(
      <section className="weather">
        <label>
          Weather
        </label>
        <div className="contents">
          <p>
            { this.state.location }
          </p>
          <p>
            { this.state.weather }
          </p>
        </div>
      </section>
    );
  }
}

export default Weather;

//5515b6f98c81335511f884aa28e405e6
