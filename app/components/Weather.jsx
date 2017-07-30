const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch : function(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(temp => {
      this.setState({
        location: location, 
        temp: temp,
        isLoading: false
      });

    }, e => {
      this.setState({
        isLoading:false,
        errorMessage : e.message
      });
    })
  },

  render : function() {
    const {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather..</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title"> Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
    </div>
    )
  }
});

module.exports  =  Weather;