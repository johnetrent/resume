import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Section from '../components/Section';
import Skill from '../components/Skill';
import MediaQueries from '../styles/media-queries';
import LaptopIcon from '../icons/laptop.svg';
import HTMLLogo from '../logos/html.svg';
import CSSLogo from '../logos/css.svg';
import SassLogo from '../logos/sass.svg';
import LessLogo from '../logos/less.svg';
import PythonLogo from '../logos/python.svg';
import BabelLogo from '../logos/babel.svg';
import ReactLogo from '../logos/react.svg';
import ReactRouterLogo from '../logos/react-router.svg';
import JavaScriptLogo from '../logos/javascript.svg';
import CoffeeScriptLogo from '../logos/coffeescript.svg';
import NodeJSLogo from '../logos/nodejs.svg';
import ESLintLogo from '../logos/eslint.svg';
import ReduxLogo from '../logos/redux.svg';
import JestLogo from '../logos/jest.svg';
import WebpackLogo from '../logos/webpack.svg';
import AWSLogo from '../logos/aws.svg';
import GitLogo from '../logos/git.svg';
import GraphQLLogo from '../logos/graphql.svg';
import CircleCILogo from '../logos/circleci.svg';

export default function Skills() {
  return (
    <Section title="Languages &amp; Skills" icon={LaptopIcon}>
      <div className={css(styles.container)}>
        <div className={css(styles.column)}>
          <Skill name="HTML" icon={HTMLLogo} />
          <Skill name="CSS" icon={CSSLogo} />
          <Skill name="Sass" icon={SassLogo} />
          <Skill name="Less" icon={LessLogo} />
        </div>
        <div className={css(styles.column)}>
          <Skill name="Python" icon={PythonLogo} />
          <Skill name="JavaScript" icon={JavaScriptLogo} />
          <Skill name="CoffeeScript" icon={CoffeeScriptLogo} />
          <Skill name="GraphQL" icon={GraphQLLogo} />
        </div>
        <div className={css(styles.column)}>
          <Skill name="Node" icon={NodeJSLogo} />
          <Skill name="Babel" icon={BabelLogo} />
          <Skill name="Webpack" icon={WebpackLogo} />
          <Skill name="ESLint" icon={ESLintLogo} />
        </div>
        <div className={css(styles.column)}>
          <Skill name="React" icon={ReactLogo} />
          <Skill name="React Router" icon={ReactRouterLogo} />
          <Skill name="Redux" icon={ReduxLogo} />
          <Skill name="Jest" icon={JestLogo} />
        </div>
        <div className={css(styles.column)}>
          <Skill name="AWS" icon={AWSLogo} />
          <Skill name="Git" icon={GitLogo} />
          <Skill name="CircleCI" icon={CircleCILogo} />
        </div>
      </div>
    </Section>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  column: {
    width: '50%',
    marginBottom: 30,

    [MediaQueries['≥tablet']]: {
      width: '33.333%',
    },

    [MediaQueries['≥tabletLandscape']]: {
      width: '20%',
    },

    '@media print': {
      width: '20%',
    },
  },
});
