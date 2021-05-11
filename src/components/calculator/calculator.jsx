import React, {useState} from 'react';
import Section from "../section/section";
import Step1 from "../step-1/step-1";
import {SectionType} from "../../const";

const Calculator = () => {

  const [purpose, setPurpose] = useState(false);
  // const [isRegistrationOpened, setRegistrationOpened] = useState(false);

  return (
    <Section name={SectionType.CALCULATOR.name} title={SectionType.CALCULATOR.title}>
      <form className="calculator form">
        <div className="calculator__wrapper">
          <Step1 creditPurpose={purpose} changeCreditPurpose={setPurpose} />
          {purpose ? `показывается шаг 2` : ``}
        </div>
      </form>
    </Section>
  );
};

export default Calculator;
