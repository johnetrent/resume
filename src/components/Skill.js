import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import ReactSVG from 'react-svg';

export default function Skill(props) {
  return (
    <div className={css(styles.Skill)}>
      {props.icon && (
        <ReactSVG
          className={css(styles.icon)}
          wrapperClassName={css(styles.iconWrapper)}
          path={props.icon}
        />
      )}
      <div className={css(styles.name)}>{props.name}</div>
    </div>
  );
}

Skill.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  Skill: {
    display: 'flex',
    flexFlow: 'nowrap',
    alignItems: 'center',
    paddingRight: 10,
    marginBottom: 15,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 20,
    marginRight: 5,
  },
  icon: {
    width: 'auto',
    height: 'auto',
    maxWidth: 25,
    maxHeight: 20,
  },
  name: {
    fontSize: 13,
  },
});
