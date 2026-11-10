import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const CounterCard = styled.div`
  background-color: rgba(246, 248, 251, 0.8);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 60px 24px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  @media (max-width: 768px) {
    min-height: 35vh;
    padding: 40px 18px;
  }
`;

const NumberDisplay = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 84px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: none;

  span.plus {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 1024px) {
    font-size: 64px;
  }

  @media (max-width: 640px) {
    font-size: 52px;
  }
`;

const SubText = styled.p`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  color: rgba(15, 23, 42, 0.75);
  max-width: 620px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-top: 14px;
  }
`;

export const BeneficiaryCounter = ({ target = 500 }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 50;
          const increment = target / steps;
          let currentVal = 0;

          const timer = setInterval(() => {
            currentVal += increment;
            if (currentVal >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(currentVal));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <SectionWrapper>
      <CounterCard ref={cardRef}>
        <NumberDisplay>
          {count.toLocaleString()}<span className="plus">+</span>
        </NumberDisplay>
        <SubText>
          Families, caregivers, and patients directly supported across our free dementia care initiatives in Zimbabwe.
        </SubText>
      </CounterCard>
    </SectionWrapper>
  );
};
