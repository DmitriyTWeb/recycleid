import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPredictions } from '../../store/action';
import Model from '../../assets/neuronet/Model';

const getFormatedPredictions = (predicts) => {
  console.log('getFormatedPredictions: predicts = ', predicts);
  const MAX_PREDICTIONS_NUMBER = 5;

  const mostValuePredicts = predicts.slice(0, MAX_PREDICTIONS_NUMBER);
  const convertedPredicts = mostValuePredicts.map((predict) => {
    let probability = predict.probability * 100;
    probability = probability < 1 ? 'менее 1%' : probability.toFixed(2);

    return ({
      id: predict.className,
      title: predict.className,
      probability,
    });
  });

  console.log('convertedPredicts = ', convertedPredicts);
  return convertedPredicts;
};

const OutputDesk = ({ model, imageURL, setPredictionsToStore }) => {
  const [predictions, setPredictionsToState] = useState([]);

  useEffect(() => {
    model.getPredictions(imageURL)
      .then((predicts) => {
        setPredictionsToStore(predicts);

        const formattedPredictions = getFormatedPredictions(predicts);
        setPredictionsToState(formattedPredictions);
      });
  }, [model, imageURL, setPredictionsToStore]);

  return (
    <section className="output-desk">
      <h2 className="output-desk__title">Данные распознавания</h2>

      <table className="output-desk__table">
        <tbody>
          <tr>
            <th>Наименование</th>
            <th>Вероятность %</th>
            <th>Принимается</th>
          </tr>

          {predictions.map((predict) => (
            <tr key={predict.id}>
              <td className="output-desk__predict-title">{`${predict.title}`}</td>
              <td>{`${predict.probability}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

OutputDesk.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
  imageURL: PropTypes.string.isRequired,
  setPredictionsToStore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
});

const mapDispatchToProps = (dispatch) => ({
  setPredictionsToStore(predictions) {
    dispatch(setPredictions(predictions));
  },
});

export { OutputDesk };
export default connect(mapStateToProps, mapDispatchToProps)(OutputDesk);
