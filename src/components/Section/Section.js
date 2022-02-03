import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <section>
        <div className="container">
            {children}
         </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;