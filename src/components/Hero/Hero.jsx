import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 24px 70px 24px;
  max-width: 1040px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 36px 18px 50px 18px;
  }
`;

const PartnerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(27, 50, 151, 0.15);

  img.mohcc {
    height: 18px;
    width: auto;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 42px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: none;

  span.italic {
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1024px) {
    font-size: 34px;
  }

  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 1.35;
  }
`;

const Subtitle = styled.p`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  font-weight: 300;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 860px;

  span.bold {
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    font-size: 19px;
    margin-top: 20px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const DonateButton = styled.button`
  margin-top: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 14px 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px -4px rgba(27, 50, 151, 0.35);
  }

  @media (max-width: 640px) {
    margin-top: 28px;
    padding: 12px 28px;
    font-size: 15px;
  }
`;

export const Hero = ({ onOpenDonate }) => {
  return (
    <HeroContainer>
      <PartnerBadge>
        <img
          src="/assets/mohcc-logo-CQ2Gfag9.png"
          alt="Ministry of Health and Child Care Zimbabwe"
          className="mohcc"
        />
        <span>In partnership with the Ministry of Health & Childcare Zimbabwe</span>
      </PartnerBadge>
      <Title>
        Bringing hope and dignity to <span className="italic">dementia care</span> in Zimbabwe.
      </Title>
      <Subtitle>
        Creating awareness and advocating for prevention, diagnosis, treatment, and management of dementia,<br />
        <span className="bold">&nbsp;one family, one caregiver, one community at a time.</span>
      </Subtitle>
      <DonateButton onClick={onOpenDonate}>
        Support DAZ Today
      </DonateButton>
    </HeroContainer>
  );
};
