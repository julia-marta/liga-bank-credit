import React from 'react';
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs";
import TabItem from "../tab-item/tab-item";
import {Service, Tab} from "../../const";

const {DEPOSITS, CREDITS, INSURANCE, ONLINE} = Tab;

const Services = ({isSwipeable}) => {

  return (
    <section className="services">
      <h2 className="visually-hidden">Услуги банка</h2>
        <div className="services__wrapper container">
          <Tabs isSwipeable={isSwipeable} renderTab={(activeTab) => {
              switch (activeTab) {
                case DEPOSITS.index:
                  return <TabItem className={DEPOSITS.name} data={Service.DEPOSITS} />;
                case CREDITS.index:
                  return <TabItem className={CREDITS.name} data={Service.CREDITS} />;
                case INSURANCE.index:
                  return <TabItem className={INSURANCE.name} data={Service.INSURANCE} />;
                case ONLINE.index:
                  return <TabItem className={ONLINE.name} data={Service.ONLINE} />;
                default:
                  return null;
              }
            }} />
        </div>
    </section>
  );
};

Services.propTypes = {
  isSwipeable: PropTypes.bool.isRequired,
};

export default Services;
