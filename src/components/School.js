import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';

export default function School(props) {
  return (
    <Summary
      heading={props.degree}
      subheading={
        <Fragment>
          {props.name} | {props.dates}
          <div>{props.location}</div>
        </Fragment>
      }
      description={props.description}
    />
  );
}

School.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
