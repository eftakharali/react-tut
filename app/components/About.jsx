const React = require('react');

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1> 
      <p>This is a weather aplication build on React. I have built this while learning react</p>
      <p>
        Here are some of the the tools I used
      </p>
      <ul>
        <li>
          <a href="#">React framework</a> - This is the Javascript framework used.
        </li>
        <li>
          <a href="#">Open Weather Map</a>- This provided the api to search the weather.
        </li>
      </ul>
    </div>
  );
}

module.exports  =  About;