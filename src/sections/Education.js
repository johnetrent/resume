import React from 'react';
import Section from '../components/Section';
import School from '../components/School';
import EducationIcon from '../icons/education.svg';

export default function Education() {
  return (
    <Section title="Education" icon={EducationIcon}>
      <School
        name="The University of Texas at Austin"
        degree="Advertising, M.A."
        dates="2011 - 2013"
        location="Austin, TX"
      />
      <School
        name="Georgetown University"
        degree="Computer Science, B.S."
        dates="2006 - 2010"
        location="Washington, D.C."
      />
    </Section>
  );
}
