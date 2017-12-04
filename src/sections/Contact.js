import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/Section';
import School from '../components/School';
import ContactIcon from '../icons/contact.svg';
import ContactInfo from '../components/ContactInfo';
import GitHubLogo from '../logos/github.svg';
import EmailIcon from '../icons/email.svg';
import PhoneIcon from '../icons/phone.svg';
import MarkerIcon from '../icons/marker.svg';

export default function Contact(props) {
  const emailAddress = ['john.e.trent', '@', 'gmail.com'].join('');
  return (
    <Section title="Contact" icon={ContactIcon}>
      {props.showGitHub && (
        <ContactInfo
          icon={GitHubLogo}
          link="https://github.com/johnetrent"
          text="github.com/johnetrent"
        />
      )}
      {props.showEmail && (
        <ContactInfo
          icon={EmailIcon}
          link={`mailto:${emailAddress}`}
          text={emailAddress}
        />
      )}
      {props.showPhone && (
        <ContactInfo
          icon={PhoneIcon}
          link="tel:703-340-9124"
          text="+1 (703) 340-9124"
        />
      )}
      {props.showLocation && (
        <ContactInfo icon={MarkerIcon} text="Washington, D.C." />
      )}
    </Section>
  );
}

Contact.propTypes = {
  showGitHub: PropTypes.bool,
  showEmail: PropTypes.book,
  showPhone: PropTypes.bool,
  showLocation: PropTypes.bool,
};

Contact.defaultProps = {
  showGitHub: true,
  showEmail: true,
  showPhone: false,
  showLocation: true,
};
