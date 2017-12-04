import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './src/Resume';

const root = document.getElementById('react-root');

function render(Component) {
  ReactDOM.render(<Component />, root);
}

render(Resume);
if (module.hot) {
  module.hot.accept(() => {
    // eslint-disable-next-line global-require
    const updatedResume = require('./src/Resume').default;
    render(updatedResume);
  });
}
