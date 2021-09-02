import React from 'react';
import { connect } from 'react-redux';

const OutputDesk = () => {
  return (
    <section className="output-desk">
      <table className="class-desk__table">
        <thead>
          <tr>
            <th>Наименование </th>
            <th> Вероятность % </th>
            <th> Принимается </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              описание класса
            </td>
          </tr>
        </tbody>
    </table>
  </section>
  );
};

export default OutputDesk;