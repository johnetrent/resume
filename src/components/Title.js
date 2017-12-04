import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {BLUE, WHITE} from '../styles/colors';
import {RALEWAY} from '../styles/fonts';

export default function Title(props) {
  return <h1 className={css(styles.Title)}>{props.children}</h1>;
}

const styles = StyleSheet.create({
  Title: {
    fontFamily: RALEWAY,
    textTransform: 'uppercase',
    backgroundColor: BLUE,
    color: WHITE,
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 30,
  },
});
