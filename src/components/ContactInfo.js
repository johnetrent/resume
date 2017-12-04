import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import ReactSVG from 'react-svg';
import {CABIN} from '../styles/fonts';
import {BLACK, GRAY} from '../styles/colors';

export default function ContactInfo(props) {
  const Wrapper = props.link
    ? p => <a target="_blank" rel="nofollow noreferrer" {...p} />
    : p => <div {...p} />;
  return (
    <Wrapper className={css(styles.ContactInfo)} href={props.link}>
      <ReactSVG
        className={css(styles.icon)}
        wrapperClassName={css(styles.iconWrapper)}
        path={props.icon}
      />
      <span className={css(styles.text)}>{props.text}</span>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  ContactInfo: {
    fontFamily: CABIN,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    color: BLACK,
    textDecoration: 'none',
    marginBottom: 15,
  },
  icon: {
    width: 'auto',
    height: 'auto',
    maxWidth: 25,
    maxHeight: 25,
    fill: GRAY,
  },
  iconWrapper: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});
