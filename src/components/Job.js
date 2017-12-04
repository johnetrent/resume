import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';

export default function Job(props) {
  return (
    <Summary
      heading={props.title}
      subheading={
        <Fragment>
          {props.company} | {props.dates}
        </Fragment>
      }
      description={props.description}
    />
  );
}

Job.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
