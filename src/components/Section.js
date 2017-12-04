import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import ReactSVG from 'react-svg';
import {BLUE, GRAY} from '../styles/colors';
import {CABIN} from '../styles/fonts';

export default function Section(props) {
  return (
    <section className={css(styles.Section)}>
      {props.icon && (
        <ReactSVG className={css(styles.icon)} path={props.icon} />
      )}
      <h3 className={css(styles.title)}>{props.title}</h3>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  Section: {
    position: 'relative',
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    top: -2,
    left: 0,
    fill: GRAY,
  },
  title: {
    color: BLUE,
    fontSize: 16,
    fontFamily: CABIN,
    fontWeight: 400,
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: BLUE,
    marginTop: 0,
    marginBottom: 15,
  },
});
