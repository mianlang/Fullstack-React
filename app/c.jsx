import React from 'react';
import PropTypes from 'prop-types';

const C = props => <div>{props.name}</div>;

C.propTypes = { name: PropTypes.string.isRequired };

export default C;
