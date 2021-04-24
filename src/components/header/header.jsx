import React, {useState, useCallback, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import {Viewport} from "../../const";

const Header = () => {

  const [isMenuOpened, setMenuOpened] = useState(true);

  const isTablet = useMediaQuery({minWidth: Viewport.TABLET.min, maxWidth: Viewport.TABLET.max});
  const isMobile = useMediaQuery({maxWidth: Viewport.MOBILE.max});

  useEffect(() => {
    if (isMobile) {
      setMenuOpened(false);
    }
  }, [isMobile]);

  const handleMenuOpening = useCallback(
    (evt) => {
      evt.preventDefault();
      setMenuOpened(true);
    }, []
  );

  const handleMenuClosing = useCallback(
    (evt) => {
      evt.preventDefault();
      setMenuOpened(false);
    }, []
  );

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__top">
          {isMobile && <button className="header__hamburger-menu" type="button" aria-label="Открыть меню" onClick={handleMenuOpening}></button>}
          <Logo name={`header`} isMobileLogo={isMobile} />
          {isMobile && isMenuOpened && <button className="header__close-menu" type="button" aria-label="Закрыть меню" onClick={handleMenuClosing}></button>}
        </div>
        <div className="header__navigation">
          <Navigation isCompactMenu={isTablet} isMobileMenu={isMobile} isMenuOpened={isMenuOpened} />
        </div>
      </div>
    </header>
  );
};

export default Header;
