import React from 'react';
import { Link } from 'react-router';
import actions from '../actions';

const Landing = (props) => (
  <section className="landing">
    <h1>Todo App</h1>
    <ul>
      <li>
        <Link to={`/${actions.Filters.ALL.toLowerCase()}`}>All</Link>
      </li>
      <li>
        <Link to={`/${actions.Filters.COMPLETE.toLowerCase()}`}>Complete</Link>
      </li>
      <li>
        <Link to={`/${actions.Filters.INCOMPLETE.toLowerCase()}`}>Incomplete</Link>
      </li>
    </ul>
    {props.children}
  </section>
);

Landing.propTypes = {
  children: React.PropTypes.node
};

export default Landing;
