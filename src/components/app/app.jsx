import React, {Fragment, useState, useEffect, useCallback} from 'react';
import Header from "../header/header";
import Modal from "../modal/modal";
import Main from "../main/main";
// import Footer from "../footer/footer";
import {Key} from "../../const";

const App = () => {

  const [isModalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = `hidden`;
      document.addEventListener(`keydown`, handleEscKeyDown);
    } else {
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, handleEscKeyDown);
    }
  });

  const handleModalOpening = useCallback(
    (evt) => {
      evt.preventDefault();
      setModalActive(true);
    }, []
  );

  const handleModalClosing = useCallback(
    (evt) => {
      evt.preventDefault();
      setModalActive(false);
    }, []
  );

  const handleEscKeyDown = useCallback(
    (evt) => {
      if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
        evt.preventDefault();
        setModalActive(false);
      }
    }, []
  );

  return (
    <Fragment>
      <Header onLoginButtonClick={handleModalOpening} />
      <Modal isActive={isModalActive} onCloseButtonClick={handleModalClosing} />
      <Main />
      {/* <Footer /> */}

    </Fragment>
  );
};

export default App;
