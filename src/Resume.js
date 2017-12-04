import React, {Component} from 'react';
import Title from './components/Title';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Skills from './sections/Skills';
import {StyleSheet, css} from 'aphrodite';
import MediaQueries from './styles/media-queries';
import {RALEWAY} from './styles/fonts';
import {GRAY, BLUE} from './styles/colors';
import html2pdf from 'html2pdf.js';
import ReactSVG from 'react-svg';
import DownloadIcon from './icons/download.svg';
import ReactGA from 'react-ga';
import 'normalize.css';

export default class Resume extends Component {
  handleClick = () => {
    html2pdf(this.page, {
      margin: 0.5,
      filename: 'Resume-John-Trent.pdf',
      image: {type: 'jpeg', quality: 0.98},
      html2canvas: {dpi: 192, letterRendering: true},
      jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'},
    });
    ReactGA.event({
      category: 'User',
      action: 'Downloaded Resume',
    });
  };
  render() {
    return (
      <div className={css(styles.base)}>
        <div ref={el => (this.page = el)}>
          <Title>John Trent</Title>
          <div className={css(styles.content)}>
            <div className={css(styles.columns)}>
              <div className={css(styles.mainColumn)}>
                <Experience />
              </div>
              <div className={css(styles.sideColumn)}>
                <Education />
                <div className={css(styles.separator)} />
                <Contact />
              </div>
            </div>
            <Skills />
          </div>
        </div>
        <button
          className={css(styles.downloadButton)}
          onClick={this.handleClick}
        >
          <ReactSVG path={DownloadIcon} className={css(styles.downloadIcon)} />
        </button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    fontFamily: RALEWAY,
    maxWidth: '8.5in',
    maxHeight: '11in',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },
  content: {
    [MediaQueries['<tablet']]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  columns: {
    marginBottom: 40,

    [MediaQueries['≥tablet']]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    '@media print': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  mainColumn: {
    [MediaQueries['<tablet']]: {
      marginBottom: 40,
    },
    [MediaQueries['≥tablet']]: {
      width: '55%',
      paddingRight: 40,
    },
    '@media print': {
      width: '55%',
      paddingRight: 40,
    },
  },
  sideColumn: {
    [MediaQueries['≥tablet']]: {
      width: '45%',
    },
    '@media print': {
      width: '45%',
    },
  },
  separator: {
    marginBottom: 40,
  },
  downloadButton: {
    position: 'fixed',
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: GRAY,
    borderStyle: 'solid',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'border-color ease-in-out 0.2s',

    ':hover': {
      borderColor: BLUE,
    },

    '@media print': {
      display: 'none',
    },
  },
  downloadIcon: {
    fill: GRAY,
    transition: 'fill ease-in-out 0.2s',

    ':hover': {
      fill: BLUE,
    },
  },
});
