import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ imgSrc }) => (
  <div className="preview">
    {console.log('imgURL = ', imgSrc)}
    <img className="preview__render" src={imgSrc} alt="Preview предпросмотр" />
    {!imgSrc && <p>Nothing to displa</p>}
  </div>
);

Preview.propTypes = {
  imgSrc: PropTypes.string,
};
Preview.defaultProps = {
  imgSrc: '',
};

export default Preview;
