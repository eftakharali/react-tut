var React = require('react');
const {Link} = require('react-router');

const Nav = () => {
    return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/">Get Weather</Link>
        <Link to="/about">Get About</Link>
        <Link to="/examples">Get Examples</Link>
      </div>
    );
}

module.exports = Nav;

