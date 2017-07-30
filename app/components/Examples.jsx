const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
 return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
       <p>Here are a few example loactions to try out:</p>
       <ol>
         <li>
           <Link to="/?location=Delhi">New Delhi, India</Link>
         </li>
         <li>
           <Link to="/?location=Bengaluru">Bengaluru, India</Link>
         </li>
       </ol>
     </div>
  );
}

module.exports  =  Examples;