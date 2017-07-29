const React = require('react');

const WeatherMessage = (props) => {
  const {temp, location} = props;
    return (
      <div>
        <h3 className="text-center">It's {temp} in {location}.</h3>
      </div>
    )
}

module.exports = WeatherMessage;