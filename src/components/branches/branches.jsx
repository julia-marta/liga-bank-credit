import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import Section from "../section/section";
import {SectionType, MapParam} from "../../const";

const {PLACEMARK, DESKTOP} = MapParam;

const Branches = ({isMobile, isTablet}) => {

  const params = DESKTOP;

  return (
    <Section name={SectionType.BRANCHES.name} title={SectionType.BRANCHES.title}>
      <YMaps>
          <div className="branches__map">
            <Map defaultState={{ center: [params.latitude, params.longitude], zoom: params.zoom }} width='100%' height='100%' >
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
    </Section>
  );
};

export default Branches;
