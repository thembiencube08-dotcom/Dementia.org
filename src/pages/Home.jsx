import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { VideoSection } from '../components/VideoSection/VideoSection';
import { WhyUncommon } from '../components/WhyUncommon/WhyUncommon';
import { OurModelCarousel } from '../components/OurModelCarousel/OurModelCarousel';
import { BeneficiaryCounter } from '../components/BeneficiaryCounter/BeneficiaryCounter';
import { InfiniteMarquee } from '../components/InfiniteMarquee/InfiniteMarquee';
import { ImpactEconomics } from '../components/ImpactEconomics/ImpactEconomics';
import { StoriesSection } from '../components/StoriesSection/StoriesSection';
import { JourneyCards } from '../components/JourneyCards/JourneyCards';

export const Home = ({ onOpenDonate }) => {
  return (
    <main>
      <Hero onOpenDonate={onOpenDonate} />
      <VideoSection />
      <WhyUncommon onOpenDonate={onOpenDonate} />
      <OurModelCarousel onOpenDonate={onOpenDonate} />
      <BeneficiaryCounter target={5420} />
      <InfiniteMarquee />
      <ImpactEconomics onOpenDonate={onOpenDonate} />
      <StoriesSection />
      <JourneyCards />
    </main>
  );
};

