import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  hobby: PropTypes.string.isRequired,
};

const Hobby = props => <li>{props.hobby}</li>;

Hobby.propTypes = propTypes;

export default Hobby;
