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
          And this is my portfolio
        </SectionTitle>
        <SectionText>
          This portfolio will showcase my completed projects and skills.
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;