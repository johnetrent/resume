import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './src/Resume';
import ReactGA from 'react-ga';

const root = document.getElementById('react-root');

function render(Component) {
  ReactDOM.render(<Component />, root);
}

render(Resume);
ReactGA.initialize('UA-42606539-2');

if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    const updatedResume = require('./src/Resume').default;
    render(updatedResume);
  });
}
