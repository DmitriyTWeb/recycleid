import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetAll } from '../../store/action.ts';

const Preview = ({
  imgSrc,
  cameraBtnClickHandler,
  resetAllInStore,
}) => {
  const resetHandler = () => {
    resetAllInStore();
  };

  return (
    <div className="preview">
      <img className="preview__render" src={imgSrc} alt="Preview предпросмотр" width="280" height="280" />
      {!imgSrc && <p>Nothing to displa</p>}

      <div className="preview__controls">
        <button
          type="button"
          className="preview__btn preview__btn--camera"
          onClick={cameraBtnClickHandler}
        >
          Take new photo
        </button>
        <button
          type="button"
          className="preview__btn preview__btn--reset"
          onClick={resetHandler}
        >
          Reset photo
        </button>
      </div>
    </div>
  );
};

Preview.propTypes = {
  imgSrc: PropTypes.string,
  resetAllInStore: PropTypes.func.isRequired,
  cameraBtnClickHandler: PropTypes.func.isRequired,
};
Preview.defaultProps = {
  imgSrc: '',
};

const mapDispatchToProps = (dispatch) => ({
  resetAllInStore() {
    dispatch(resetAll());
  },
});

export { Preview };
export default connect(null, mapDispatchToProps)(Preview);
