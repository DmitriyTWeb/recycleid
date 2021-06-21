import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setActiveClass, setPredictions } from '../../store/action';
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

const OutputDesk = ({
  model, imgURL, setPredictionsToStore, setActiveClassToStore, activeClass,
}) => {
  const [predictions, setPredictionsToState] = useState([]);

  useEffect(() => {
    if (!imgURL) {
      setPredictionsToState([]);
    }
    model.getPredictions(imgURL)
      .then((predicts) => {
        setPredictionsToStore(predicts);

        const formattedPredictions = getFormatedPredictions(predicts);
        setPredictionsToState(formattedPredictions);
      });
  }, [model, imgURL, setPredictionsToStore]);

  const rowClickHandler = (evt) => {
    const selectedRow = evt.target.closest('tr');
    const rowId = selectedRow.getAttribute('id');
    setActiveClassToStore(rowId);
  };

  const getRowClassName = (currentPredictId) => {
    const shouldBeInitiate = predictions && !activeClass;
    const activeId = shouldBeInitiate ? predictions[0].id : activeClass;
    const className = activeId === currentPredictId ? 'output-desk__active-row' : '';

    return className;
  };

  return (
    <section className="output-desk">
      <h2 className="output-desk__title">Данные распознавания</h2>

      <table className="output-desk__table">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Вероятность %</th>
            <th>Принимается</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((predict) => (
            <tr
              key={predict.id}
              id={predict.id}
              className={getRowClassName(predict.id)}
              onClick={rowClickHandler}
            >
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
  setActiveClassToStore: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  imgURL: state.imgURL,
  activeClass: state.activeClass,
});

const mapDispatchToProps = (dispatch) => ({
  setPredictionsToStore(predictions) {
    dispatch(setPredictions(predictions));
  },
  setActiveClassToStore(activeClass) {
    dispatch(setActiveClass(activeClass));
  },
});

export { OutputDesk };
export default connect(mapStateToProps, mapDispatchToProps)(OutputDesk);
