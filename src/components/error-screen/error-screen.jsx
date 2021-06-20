import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetError } from '../../store/action';

const ErrorScreen = ({ errorMessage, resetErrorAction }) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <section className="error-screen">
      <h1 className="error-screen__title">Ошибка</h1>

      <p className="error-screen__reason">{errorMessage}</p>

      <button type="button" className="button" onClick={resetErrorAction}>
        ЗАКРЫТЬ
      </button>
    </section>
  );
};

ErrorScreen.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorAction: PropTypes.func.isRequired,
};
ErrorScreen.defaultProps = {
  errorMessage: '',
};

const mapStateToProps = (state) => ({
  errorMessage: state.error,
});
const mapDispatchToProps = (dispatch) => ({
  resetErrorAction() {
    dispatch(resetError());
  },
});

export { ErrorScreen };
export default connect(mapStateToProps, mapDispatchToProps)(ErrorScreen);
