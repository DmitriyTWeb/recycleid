import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetImage } from '../../store/action';

const Preview = ({ imgSrc, cameraBtnClickHandler, resetImgURL }) => (
  <div className="preview">
    <img className="preview__render" src={imgSrc} alt="Preview предпросмотр" />
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
        onClick={resetImgURL}
      >
        Reset photo
      </button>
    </div>
  </div>
);

Preview.propTypes = {
  imgSrc: PropTypes.string,
  resetImgURL: PropTypes.func.isRequired,
  cameraBtnClickHandler: PropTypes.func.isRequired,
};
Preview.defaultProps = {
  imgSrc: '',
};

const mapDispatchToProps = (dispatch) => ({
  resetImgURL() {
    dispatch(resetImage());
  },
});

export { Preview };
export default connect(null, mapDispatchToProps)(Preview);
