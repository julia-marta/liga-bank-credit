import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {useMediaQuery} from 'react-responsive';
import Header from "../header/header";
import Modal from "../modal/modal";
import Main from "../main/main";
// import Footer from "../footer/footer";
import {Key, Viewport, defaultAnimation} from "../../const";

const App = () => {

  const isTablet = useMediaQuery({minWidth: Viewport.TABLET.min, maxWidth: Viewport.TABLET.max});
  const isMobile = useMediaQuery({maxWidth: Viewport.MOBILE.max});

  const [isModalActive, setModalActive] = useState(false);
  const [modalAnimation, setAnimation] = useState(defaultAnimation);

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
      setAnimation(defaultAnimation);
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

  const handleModalError = useCallback(
    () => {
      setAnimation({ ...modalAnimation, shake: true });
    }, [modalAnimation]
  );

  const handleModalAnimation = useCallback(
    () => {
      if (modalAnimation.fadein) {
        setAnimation({ ...modalAnimation, fadein: false });
      }

      if (modalAnimation.shake) {
        setAnimation({ ...modalAnimation, shake: false });
      }

      return;

    }, [modalAnimation]
  );

  return (
    <Fragment>
      <Header onLoginButtonClick={handleModalOpening} isMobile={isMobile} isTablet={isTablet} />
      <Modal isActive={isModalActive} isMobile={isMobile} animation={modalAnimation}
        onClose={handleModalClosing} onError={handleModalError} onAnimation={handleModalAnimation} />
      <Main isMobile={isMobile} isTablet={isTablet} />
      {/* <Footer /> */}

    </Fragment>
  );
};

export default App;
