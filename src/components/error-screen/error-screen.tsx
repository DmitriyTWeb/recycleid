import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetError } from '../../store/action';
import { State } from '../../interfaces';


type Props = {
  errorMessage: string,
  resetErrorAction: MouseEventHandler
}

const ErrorScreen: React.FC<Props> = ({ errorMessage, resetErrorAction }) => {
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
  errorMessage: PropTypes.string.isRequired,
  resetErrorAction: PropTypes.func.isRequired,
};


const mapStateToProps = (state: State) => ({
  errorMessage: state.error,
});
const mapDispatchToProps = (dispatch: Function) => ({
  resetErrorAction() {
    dispatch(resetError());
  },
});

export { ErrorScreen };
export default connect(mapStateToProps, mapDispatchToProps)(ErrorScreen);
