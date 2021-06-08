import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPredictions } from '../../store/action';
import Model from '../../assets/neuronet/Model';
import idClasses from '../../assets/id-classes/id-classes';
import { kebabToCamelCase } from '../../utils';

const emptyDescription = {
  isAcceptable: false,
  title: 'emptyTitle',
  desc: 'emptyDesctiption',
  preparingRules: [],
};

const getDescriptionByClassName = (className) => {
  const classNameParts = className.split('__');
  const SHORT_NAME_INDEX = 1;
  const shortName = classNameParts[SHORT_NAME_INDEX];
  const cameledName = kebabToCamelCase(shortName);

  const description = idClasses[cameledName] || emptyDescription;

  return description;
};

const getFormatedPredictions = (predicts) => {
  const MAX_PREDICTIONS_NUMBER = 5;

  const mostValuePredicts = predicts.slice(0, MAX_PREDICTIONS_NUMBER);

  const convertedPredicts = mostValuePredicts.map((predict) => {
    let probability = predict.probability * 100;
    probability = probability < 1 ? 'менее 1%' : probability.toFixed(2);

    const classDescription = getDescriptionByClassName(predict.className);
    const isAcceptable = classDescription.isAcceptable ? '✔️' : '❌';
    return ({
      id: predict.className,
      title: classDescription.title,
      probability,
      isAcceptable,
    });
  });

  return convertedPredicts;
};

const OutputDesk = ({ model, imgURL, setPredictionsToStore }) => {
  const [predictions, setPredictionsToState] = useState([]);

  useEffect(() => {
    model.getPredictions(imgURL)
      .then((predicts) => {
        setPredictionsToStore(predicts);

        const formattedPredictions = getFormatedPredictions(predicts);
        setPredictionsToState(formattedPredictions);
      });
  }, [model, imgURL, setPredictionsToStore]);

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
              <td>{`${predict.isAcceptable}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

OutputDesk.propTypes = {
  model: PropTypes.instanceOf(Model).isRequired,
  imgURL: PropTypes.string.isRequired,
  setPredictionsToStore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  imgURL: state.imgURL,
});

const mapDispatchToProps = (dispatch) => ({
  setPredictionsToStore(predictions) {
    dispatch(setPredictions(predictions));
  },
});

export { OutputDesk };
export default connect(mapStateToProps, mapDispatchToProps)(OutputDesk);
