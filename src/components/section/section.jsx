import React from 'react';
import PropTypes from 'prop-types';

const Section = ({name, title, children}) => {

  return (
    <section id={name} className="section">
      <div className={`section__wrapper section__wrapper--${name} container`}>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
}

export default Section;
