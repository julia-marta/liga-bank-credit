import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {MapParam} from "../../const";

const {LATITUDE, LONGITUDE, ZOOM, PLACEMARK} = MapParam;

const Branches = () => {

  return (
    <section id="branches" className="branches">
      <div className="branches__wrapper">
        <h2 className="branches__title">Отделения Лига Банка</h2>

      <YMaps>
          <div className="branches__map">
            <Map defaultState={{ center: [LATITUDE, LONGITUDE], zoom: ZOOM }} width='100%' height='100%' >
              {PLACEMARK.locations.map((location, index) => {
                return  <Placemark key={index + 1} geometry={[location.lati, location.longi]} options={{
                  iconLayout: `default#image`,
                  iconImageHref: PLACEMARK.image,
                  iconImageSize: [PLACEMARK.width, PLACEMARK.height],
                  iconImageOffset: [-17, -40]
                }} />
              })}

            </Map>
          </div>
        </YMaps>
      </div>
    </section>
  );
};

export default Branches;
