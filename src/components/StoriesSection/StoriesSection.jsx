import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { featuredStory } from '../../data/siteData';

const SectionWrapper = styled.section`
  padding: 0 32px 64px 32px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px 48px 16px;
  }
`;

const StoryCard = styled.div`
  background-color: rgba(246, 248, 251, 0.8);
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 520px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 56px 48px;

  @media (max-width: 768px) {
    padding: 36px 24px;
  }
`;

const Tag = styled.p`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Headline = styled.h3`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
  text-transform: lowercase;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Summary = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17.5px;
  line-height: 1.6;
  color: rgba(15, 23, 42, 0.78);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StoryLink = styled(Link)`
  margin-top: 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 15px;
  font-weight: 600;
  width: fit-content;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateX(2px);
  }
`;

const ImageSide = styled.div`
  width: 100%;
  height: 100%;
  min-height: 340px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StoriesSection = () => {
  return (
    <SectionWrapper>
      <StoryCard>
        <ContentSide>
          <Tag>Voices of Hope</Tag>
          <Headline>{featuredStory.headline}</Headline>
          <Summary>{featuredStory.summary}</Summary>
          <StoryLink to={`/testimonials`}>
            Read More Stories <span>→</span>
          </StoryLink>
        </ContentSide>
        <ImageSide>
          <img src={featuredStory.image} alt={featuredStory.alt} />
        </ImageSide>
      </StoryCard>
    </SectionWrapper>
  );
};
