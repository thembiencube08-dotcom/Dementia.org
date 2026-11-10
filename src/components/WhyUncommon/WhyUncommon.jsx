import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 56px 48px;
  min-height: 480px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 44px 32px;
    min-height: auto;
  }

  @media (max-width: 640px) {
    padding: 32px 20px;
  }
`;

const ContentGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const Tag = styled.p`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Heading = styled.h2`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 44px;
  font-weight: 600;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.primaryForeground};
  text-transform: lowercase;

  @media (max-width: 1024px) {
    font-size: 34px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DonateButton = styled.button`
  margin-top: 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  padding: 13px 26px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateX(2px);
  }
`;

export const WhyUncommon = ({ onOpenDonate }) => {
  return (
    <SectionWrapper>
      <Card>
        <ContentGrid>
          <div>
            <Tag>Why Dementia Awareness Matters</Tag>
            <Heading>because early diagnosis and compassionate understanding change everything.</Heading>
          </div>
          <div>
            <Paragraph>
              Dementia is a decline in cognitive ability severe enough to interfere with daily life. Across Zimbabwe, cultural stigma and isolation often leave families burdened and uninformed. In partnership with the Ministry of Health and Child Care, DAZ provides the medical linkage, family counseling, and caregiver tools so that no family faces this journey alone.
            </Paragraph>
            <DonateButton onClick={onOpenDonate}>
              Support Our Work <span>→</span>
            </DonateButton>
          </div>
        </ContentGrid>
      </Card>
    </SectionWrapper>
  );
};
