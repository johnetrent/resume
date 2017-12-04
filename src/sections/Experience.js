import React from 'react';
import Section from '../components/Section';
import Job from '../components/Job';
import BriefcaseIcon from '../icons/briefcase.svg';

export default function Experience() {
  return (
    <Section title="Experience" icon={BriefcaseIcon}>
      <Job
        title="Senior Front End Developer"
        company="HZDG"
        dates="2013 - Present"
        description="Responsible for the front end development of web and mobile applications. Notable clients include Volkswagen, the Washington Redskins, Organic Valley, and Rockefeller Center"
      />
      <Job
        title="Front End Developer"
        company="Strayer University"
        dates="2013"
        description="Duties included the development and A/B testing of landing pages for marketing campaigns and the creation of an iPad support portal for MBA students"
      />
      <Job
        title="Jr. Interactive Developer"
        company="Willard Interactive"
        dates="2012 - 2013"
        description="Implemented CMS and eCommerce shopping carts across multiple platforms, including Wordpress, Shopify, ExpressionEngine and Bigcommerce"
      />
      <Job
        title="Web Content Specialist"
        company="Georgetown University"
        dates="2010 - 2012"
        description="Helped with the development and implementation of a new Content Management System and handled the front end development of multiple university websites"
      />
    </Section>
  );
}
