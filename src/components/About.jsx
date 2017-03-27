import React from 'react';
import complete from '../assets/hatch_attend.svg';
import ticket from '../assets/ticket.gif';


const About = () => (
  <div>
    <img src={ticket} alt="" />
    <h1 className="experiment">The What, Why, and How</h1>
    <div className="textleft">
      <h3>UI/UX Decisions</h3>
      <h3>System Design</h3>
      <h4>Refs on stateless components:</h4>
      <p>
            "You may not use the ref attribute on functional components because they don't have instances. You can, however, use the ref attribute inside the render function of a functional component."
            https://github.com/facebook/react/issues/4936
        </p>
      <h4>Express Server</h4>
      <p>
            I am using Node.js/Express to serve the static assets. However, if the traffic were to get heavy, using a more efficient server, like Ngnix, is likely better. This would leave the Node sever to handle API requests. At any rate, with heavy traffic things change, but this is a small, low traffic app so I made this choice.
        </p>
      <h4>Axios</h4>
      <p>Using raw Node.js to manage the asyncronous calls to the STRV API certainly gives more control and abstracts less. But I chose to use the Axios library to manage this because it is promised based, is reliable and a breeze to use.</p>
      <h4>React-Create-App</h4>
      <p>I used the react-create-app created over at Facebook because I didn't want to reinvent the     wheel. It is a great tool to have at your disposal, especially during the prototype phase.</p>
      <h3>Challenges</h3>
    </div>
  </div>
);

export default About;
