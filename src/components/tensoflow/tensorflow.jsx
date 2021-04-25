import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPredictions } from '../../utils';
// import tf from '@tensorflow/tfjs';
// const mobilenet = require('@tensorflow-models/mobilenet');

const img = new Image();
img.width = 640;
img.height = 480;

const Tensorflow = ({ imageURL }) => {
  // const [model, setModel] = useState(null);
  // const [image, setImage] = useState(null);
  getPredictions(imageURL).then((predictions) => console.log('predictions = ', predictions));
  // img.src = imageURL;
  // img.onload = () => {
  //   setImage(img);
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line no-undef
  //   mobilenet.load().then((loadedModel) => {
  //     setModel(loadedModel);
  //     console.log(`loadedModel = `, loadedModel);
  //   });
  // }, []);

  // if (image) {
  //   model.classify(image).then((preds) => {
  //     setPredictions(preds);
  //     console.log(`predistions = `, preds);
  //   });
  // }

  return (
    <p>This is Tensorflow component</p>
  );
};

Tensorflow.propTypes = {
  imageURL: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
});

export { Tensorflow };
export default connect(mapStateToProps, null)(Tensorflow);
