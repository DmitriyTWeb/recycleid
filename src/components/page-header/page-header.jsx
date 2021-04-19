import React from 'react';

const PageHeader = () => (
  <header className="page-header">
    <div className="container">
      <div className="page-header__wrapper">
        <a className="page-header__logo" href="/">
          <img className="page-header__logo-image" src="img/icon-logo.svg" width="120" height="40" alt="RecycleID logo" />
        </a>

        {/* <nav className="main-nav main-nav--opened main-nav--nojs">
          <button className="main-nav__toggle" type="button">
            <span className="visually-hidden">Открыть меню</span>
          </button>
          <div className="main-nav__wrapper">
            <ul className="main-nav__list">
              <li className="main-nav__item main-nav__item--active">
                <a className="main-nav__link" href="/">
                  Главная
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="/">
                  Штрихкод
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="/">
                  О нас
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

      </div>
    </div>
  </header>
);

export default PageHeader;
