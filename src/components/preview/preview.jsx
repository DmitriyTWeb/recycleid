import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ blob }) => (
  <div>
    <h2>Preview</h2>
    <img
      className="capturing__preview"
      src={blob && URL.createObjectURL(blob)}
      alt="Preview"
    />
  </div>
);

Preview.propTypes = {
  blob: PropTypes.instanceOf(Blob).isRequired,
};

export default Preview;
