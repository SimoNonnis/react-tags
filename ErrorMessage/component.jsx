import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

/**
 * ErrorMessage renders text based on the error message received as prop.
 * @param {string} errorMessage
 * @returns {React.Component}
 */
function ErrorMessage({ errorMessage }) {
  return <p className={styles.errorMessage}>{errorMessage}</p>;
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorMessage: null,
};

export default ErrorMessage;
