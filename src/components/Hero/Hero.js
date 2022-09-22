import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText main center>
        <SectionTitle>
          Hi my name is Sumeet Bajwa, <br />
          Welcome to my Portfolio!
        </SectionTitle>
        <SectionText>
          This portfolio will showcase my completed projects and skills.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Profile Picture Here</Button>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;