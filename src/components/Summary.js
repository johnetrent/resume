import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {CABIN} from '../styles/fonts';
import {GRAY} from '../styles/colors';

export default function Summary(props) {
  return (
    <div className={css(styles.Summary)}>
      <div className={css(styles.heading)}>{props.heading}</div>
      <div className={css(styles.subheading)}>{props.subheading}</div>
      {props.description && (
        <p className={css(styles.description)}>{props.description}</p>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  Summary: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 20,

    ':first-child': {
      marginTop: 0,
    },

    ':before': {
      content: '"•"',
      position: 'absolute',
      left: -34,
      top: 8,
      color: GRAY,
      fontSize: 30,
      lineHeight: 0,
    },

    ':after': {
      content: '""',
      position: 'absolute',
      top: 13,
      bottom: -23,
      left: -29,
      borderLeftColor: GRAY,
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
    },

    ':last-child:after': {
      bottom: 0,
    },
  },
  heading: {
    fontSize: 14,
    fontFamily: CABIN,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  subheading: {
    fontSize: 13,
    fontFamily: CABIN,
    lineHeight: 1.4,
    marginBottom: 15,
  },
  description: {
    fontSize: 12,
    lineHeight: 1.4,
    marginTop: 0,
    marginBottom: 0,
  },
});
