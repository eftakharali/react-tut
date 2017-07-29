const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch : function(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(temp => {
      this.setState({
        location: location, 
        temp: temp,
        isLoading: false
      });

    }).catch(err => {
      this.setState({isLoading:false});
      console.error(err);
      
    })
  },

  render : function() {
    const {isLoading, temp, location} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather..</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    return (
      <div>
        <h3> Get Weather components</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
    </div>
    )
  }
});

module.exports  =  Weather;