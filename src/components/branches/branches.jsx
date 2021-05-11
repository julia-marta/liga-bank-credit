import React from 'react';
import Section from "../section/section";
import {SectionType} from "../../const";

const Branches = () => {

  return (
    <Section name={SectionType.BRANCHES.name} title={SectionType.BRANCHES.title}>
      <p>Тут будут отделения</p>
    </Section>
  );
};

export default Branches;
